import React, { useState } from 'react';
import { ethers } from 'ethers';

// Um ícone de escudo em SVG para não depender de bibliotecas externas
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
 );

function App() {
  const [account, setAccount] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('Conecte sua carteira para começar.');

  const connectWallet = async () => {
    if (!window.ethereum) {
      setStatusMessage("Por favor, instale a MetaMask para continuar.");
      return;
    }
    
    setIsConnecting(true);
    setStatusMessage("Abrindo a MetaMask...");
    
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      
      setAccount(accounts[0]);
      setStatusMessage("Carteira conectada com sucesso!");

    } catch (error) {
      console.error("Falha ao conectar:", error);
      setStatusMessage("A conexão com a carteira foi cancelada ou falhou.");
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a1a, #c00)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: 'white',
      padding: '2rem'
    }}>
      <div style={{
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        padding: '48px',
        textAlign: 'center',
        maxWidth: '450px',
        width: '100%',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '8px' }}>
          Torce<span style={{ color: '#ff4d4d' }}>Holder</span>
        </h1>
        <p style={{ color: '#ccc', marginBottom: '32px' }}>O cofre digital do torcedor Tricolor.</p>

        {account ? (
          <div style={{ wordBreak: 'break-all' }}>
            <h2 style={{ fontSize: '1.25rem', color: '#4dff88', marginBottom: '16px' }}>Carteira Conectada!</h2>
            <p style={{ background: '#2a2a2a', padding: '12px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
              {account}
            </p>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            disabled={isConnecting}
            style={{
              background: 'linear-gradient(135deg, #ff4d4d, #ff1a1a)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '16px 32px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              gap: '12px'
            }}
          >
            <ShieldIcon />
            {isConnecting ? 'Conectando...' : 'Conectar Carteira'}
          </button>
        )}
        
        <p style={{ color: '#aaa', marginTop: '24px', fontSize: '0.8rem', minHeight: '20px' }}>
          {statusMessage}
        </p>
      </div>
    </div>
  );
}

export default App;
