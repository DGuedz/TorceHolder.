import React, { useState, useEffect } from 'react';
import { ChevronRight, Lock, Users, Gift, TrendingUp, Trophy, Shield, Star, Smartphone, Apple, Zap, Calendar, ShoppingBag, MapPin, Crown, Award, Coins, Flame, Target, Diamond, Loader2, Info, HelpCircle } from 'lucide-react';

const SPFC_ASSETS = {
  logo: 'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzh4VWh0RzVrbGdFN1JzTzh1d21oTllvWDAifQ', // URL de exemplo
  // Adicione outras URLs de imagem aqui se necessário
};

export default function App( ) {
  // Estados do aplicativo
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  // Dados mockados do usuário
  const mockUserData = {
    address: '0x742d35Cc6634C0532925a3b8d7e1b5aA5e99Dc42',
    spfcBalance: 1250.75,
    points: 3420,
    tier: 'HOLDER',
    streak: 7,
    joinedDate: '2024-01-15'
  };

  // Timer para splash screen
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('login');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  // Simulação de conexão da carteira
  const connectWallet = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2500));
    setUserData(mockUserData);
    setCurrentScreen('dashboard');
    setLoading(false);
  };

  // Estados da página de stake
  const [stakeAmount, setStakeAmount] = useState('');
  const [stakePeriod, setStakePeriod] = useState('30');
  const [showStakeConfirm, setShowStakeConfirm] = useState(false);
  const [stakeLoading, setStakeLoading] = useState(false);
  const [stakedTokens, setStakedTokens] = useState(750.5);
  const [totalRewards, setTotalRewards] = useState(45.3);

  // Desconectar carteira
  const disconnectWallet = () => {
    setUserData(null);
    setCurrentScreen('login');
  };

  // Navegar para stake
  const goToStake = () => setCurrentScreen('stake');
  const goBackFromStake = () => setCurrentScreen('dashboard');
  const goToBenefits = () => setCurrentScreen('benefits');
  const goBackFromBenefits = () => setCurrentScreen('dashboard');

  // Executar stake
  const executeStake = async () => {
    if (!stakeAmount || parseFloat(stakeAmount) <= 0) return;
    
    setStakeLoading(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const amount = parseFloat(stakeAmount);
    setStakedTokens(prev => prev + amount);
    setUserData(prev => ({
      ...prev,
      spfcBalance: prev.spfcBalance - amount,
      points: prev.points + Math.floor(amount * 2)
    }));
    
    setStakeAmount('');
    setShowStakeConfirm(false);
    setStakeLoading(false);
  };

  // Calcular APY baseado no período
  const calculateAPY = (period) => {
    const apyMap = { '30': 12, '90': 18, '180': 25, '365': 35 };
    return apyMap[period] || 12;
  };

  // Calcular rewards estimados
  const calculateRewards = () => {
    if (!stakeAmount) return 0;
    const amount = parseFloat(stakeAmount);
    const apy = calculateAPY(stakePeriod);
    const days = parseInt(stakePeriod);
    return (amount * apy / 100 * days / 365).toFixed(2);
  };

  // Loading Component
  const LoadingSpinner = ({ text = 'Carregando...' }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 flex flex-col items-center space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-red-600" />
        <p className="text-gray-700 font-medium">{text}</p>
      </div>
    </div>
  );

  // Componente SplashScreen
  const SplashScreen = () => (
    <div className="h-screen flex flex-col items-center justify-center text-white relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-black/40 to-gray-900/80"></div>
      <div className="relative z-20 flex flex-col items-center">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg tracking-wide">TORCE<span className="text-red-500">HOLDER</span></h1>
          <p className="text-gray-300 text-base font-medium mb-2">O Cofre Digital do Torcedor</p>
          <p className="text-gray-500 text-sm">Powered by Santo Guardião</p>
        </div>
        <div className="animate-pulse">
          <Shield className="w-16 h-16 text-red-500 mb-4" />
          <p className="text-gray-400 text-sm">Inicializando...</p>
        </div>
      </div>
    </div>
  );

  // Componente LoginScreen
  const LoginScreen = () => (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black flex flex-col items-center justify-center px-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-600/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-500/15 rounded-full blur-lg animate-pulse"></div>
      </div>
      <div className="text-center z-10 max-w-md w-full">
        <div className="mb-8">
          <img src={SPFC_ASSETS.logo} alt="TorceHolder" className="w-24 h-24 mx-auto mb-4"/>
          <h1 className="text-4xl font-bold text-white mb-2">Torce<span className="text-red-500">Holder</span></h1>
          <p className="text-gray-300 text-lg font-medium">Seu cofre digital tricolor</p>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Bem-vindo, Torcedor!</h2>
          <p className="text-gray-400 leading-relaxed">Conecte sua carteira para começar a fazer stake dos seus Fan Tokens $SPFC e desbloquear benefícios exclusivos.</p>
        </div>
        <button onClick={connectWallet} disabled={loading} className="group relative w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
          <div className="flex items-center justify-center space-x-3">
            {loading ? (<><Loader2 className="w-5 h-5 animate-spin" /><span>Conectando...</span></>) : (<><Shield className="w-5 h-5 group-hover:scale-110 transition-transform" /><span>Conectar Carteira</span></>)}
          </div>
        </button>
        <div className="mt-8 flex items-center justify-center space-x-2 text-sm text-gray-500"><Lock className="w-4 h-4" /><span>Conexão segura e criptografada</span></div>
      </div>
    </div>
  );

  // Componente DashboardScreen
  const DashboardScreen = () => {
    const truncateAddress = (address) => `${address.slice(0, 6)}...${address.slice(-4)}`;
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
        <header className="bg-black/20 backdrop-blur-sm border-b border-red-900/30 px-6 py-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center space-x-4">
              <img src={SPFC_ASSETS.logo} alt="TorceHolder" className="w-10 h-10"/>
              <div>
                <h1 className="text-xl font-bold text-white">Olá, Torcedor!</h1>
                <p className="text-gray-400 text-sm">{userData ? truncateAddress(userData.address) : 'Desconectado'}</p>
              </div>
            </div>
            <button onClick={disconnectWallet} className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 text-sm"><span>Desconectar</span><ChevronRight className="w-4 h-4 rotate-180" /></button>
          </div>
        </header>
        <main className="px-6 py-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black/30 backdrop-blur-sm border border-red-900/30 rounded-2xl p-6 hover:bg-black/40 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center"><Coins className="w-6 h-6 text-white" /></div>
