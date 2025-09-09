import React, { useState, useEffect } from 'react';
import { ChevronRight, Lock, Users, Gift, TrendingUp, Trophy, Shield, Star, Smartphone, Apple, Zap, Calendar, ShoppingBag, MapPin, Crown, Award, Coins, Flame, Target, Diamond, Loader2, Info, HelpCircle } from 'lucide-react';

const SPFC_ASSETS = {
  logo: 'DThrpjHHSwkjf4WxHGV5Y',
  brandingCollection: 'ImNgpL4bdD-OQTc1ppqkD',
  cofre: 'oLuXwrTr5aKrej_1ILLkW',
  safe: 'v0kKd3DA6u9KqoT-J2TD4',
  torceHolder: 'g7lRxKWTsXuezOLrXGvkH',
  newMockup: 'gFvkW5EkuB-4lqZvyazWq',
  cofre3D: 'FS8PLCdoqnJ40eUY8voL0',
  ativarCofre: 'pQAd_gWanfsvSsrLB5xNP',
  stakeEarn: '71bVRk6VcswTyisn5Zbsc',
  // PREMIUM: Santo Guardião TorceHolder
  santoGuardian: 'ZvuhBbT8BaqpVzwH3ba9M',
  // Fan Token SPFC References
  tokenApp: 'p8Ow1-DDss37Iy7EwvFZ_',
  tokenChart: 'pvngbCKbiNMa3O1P3Ctg8',
  tokenInfo: '14ONdTi8jqKuOfbMc5nf7',
  tokenContract: 'j1xkgc-_IRSuWYjolYdRj',
  fanZone: '7Gv4RisL_gAqSLV9XWw_i',
  rewards: 'B5RSv80jENIo474C2gfCy',
  fanToken: 'Uh0kcMz2Z-PRoCIVSQM4D',
  spfcBranding: 'CY1WRyw6yglTkpDhWtkPs',
  escudo3D: 'nwlh0cgBp9SvvHzn9hEiK'
};

export default function TorceHolderApp() {
  // Custom CSS for animations
  const customStyles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes pulse3D {
      0%, 100% { transform: scale(1); filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3)); }
      50% { transform: scale(1.05); filter: drop-shadow(0 15px 30px rgba(0,0,0,0.5)); }
    }
    
    @keyframes sparkle {
      0%, 100% { opacity: 0; transform: scale(0); }
      50% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.5); }
      50% { box-shadow: 0 0 40px rgba(239, 68, 68, 0.8), 0 0 60px rgba(251, 191, 36, 0.4); }
    }
    
    @keyframes orbit1 {
      0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
      100% { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
    }
    
    @keyframes orbit2 {
      0% { transform: rotate(0deg) translateX(200px) rotate(0deg); }
      100% { transform: rotate(-360deg) translateX(200px) rotate(360deg); }
    }
    
    @keyframes orbit3 {
      0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
      100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
    }
    
    @keyframes orbit4 {
      0% { transform: rotate(0deg) translateX(180px) rotate(0deg); }
      100% { transform: rotate(-360deg) translateX(180px) rotate(360deg); }
    }
    
    @keyframes orbit5 {
      0% { transform: rotate(0deg) translateX(250px) rotate(0deg); }
      100% { transform: rotate(360deg) translateX(250px) rotate(-360deg); }
    }
    
    @keyframes orbit6 {
      0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
      100% { transform: rotate(-360deg) translateX(100px) rotate(360deg); }
    }
    
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    
    .animate-pulse-3d {
      animation: pulse3D 4s ease-in-out infinite;
    }
    
    .animate-sparkle {
      animation: sparkle 2s ease-in-out infinite;
    }
    
    .animate-glow {
      animation: glow 3s ease-in-out infinite;
    }
    
    .text-shadow-lg {
      text-shadow: 0 4px 8px rgba(0,0,0,0.8);
    }
    
    * {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    
    .btn-primary {
      @apply bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl px-6 py-3 hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02];
    }
    
    .spacing-base {
      @apply p-4;
    }
    
    .text-shadow {
      text-shadow: 0 2px 4px rgba(0,0,0,0.6);
    }
    
    .animate-orbit-1 {
      animation: orbit1 20s linear infinite;
    }
    
    .animate-orbit-2 {
      animation: orbit2 25s linear infinite;
    }
    
    .animate-orbit-3 {
      animation: orbit3 18s linear infinite;
    }
    
    .animate-orbit-4 {
      animation: orbit4 22s linear infinite;
    }
    
    .animate-orbit-5 {
      animation: orbit5 30s linear infinite;
    }
    
    .animate-orbit-6 {
      animation: orbit6 15s linear infinite;
    }
  `;
  
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = customStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const [currentScreen, setCurrentScreen] = useState('splash');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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

  // Simulação de conexão da carteira
  const connectWallet = async () => {
    setLoading(true);
    // Simula delay de conexão
    await new Promise(resolve => setTimeout(resolve, 2500));
    setUserData(mockUserData);
    setCurrentScreen('dashboard');
    setLoading(false);
  };

  // Desconectar carteira
  const disconnectWallet = () => {
    setUserData(null);
    setCurrentScreen('login');
  };
  
  // usePersistedState hook implementation
  const usePersistedState = (key, initialValue) => {
    const [state, setState] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        return initialValue;
      }
    });
    
    const setValue = (value) => {
      try {
        setState(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error('Failed to save to localStorage:', error);
      }
    };
    
    return [state, setValue];
  };
  
  // Safe execution wrapper
  const safeExec = async (fn) => {
    setLoading(true);
    setError(null);
    try {
      return await fn();
    } catch (e) {
      setError(e?.message || 'Erro inesperado');
      console.error('Error:', e);
    } finally {
      setLoading(false);
    }
  };
  const [userTokens, setUserTokens] = useState(500);
  const [userTier, setUserTier] = usePersistedState('userTier', 'HOLDER');
  const [cashbackPoints, setCashbackPoints] = useState(1000);
  const [monthlyEarnings, setMonthlyEarnings] = useState(50);
  const [streakData, setStreakData] = usePersistedState('streakData', {
    currentStreak: 7,
    longestStreak: 14,
    totalDays: 21,
    multiplier: 1.4,
    nextMilestone: 14,
    estimatedBonus: 120
  });

  // Stake & Earn data
  const [stakeData, setStakeData] = usePersistedState('stakeData', {
    walletBalance: 2500,
    stakedTokens: 500,
    accumulatedPoints: 1500,
    monthlyEstimatedEarnings: 75,
    currentPrice: 0.027,
    priceChange: 0.000758,
    priceChangePercent: 2.8885
  });

  const [simulatorData, setSimulatorData] = usePersistedState('simulatorData', {
    tokensToStake: 1000,
    periodMonths: 12,
    selectedTier: 'HOLDER'
  });

  // Achievements data
  const achievements = [
    { id: 1, name: 'Primeiro Stake', icon: Target, earned: true, rarity: 'common', points: 100 },
    { id: 2, name: 'Streak de 7 dias', icon: Flame, earned: true, rarity: 'rare', points: 250 },
    { id: 3, name: 'HOLDER Tier', icon: Diamond, earned: true, rarity: 'rare', points: 500 },
    { id: 4, name: 'Milionário SPFC', icon: Coins, earned: false, rarity: 'legendary', points: 1000 },
    { id: 5, name: 'Campeão Paulista', icon: Trophy, earned: false, rarity: 'mythic', points: 2000 },
    { id: 6, name: 'Tri Mundial', icon: Crown, earned: false, rarity: 'mythic', points: 5000 }
  ];

  const totalAchievementPoints = achievements
    .filter(a => a.earned)
    .reduce((sum, a) => sum + a.points, 0);

  // Loading Component
  const LoadingSpinner = ({ text = 'Carregando...' }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 flex flex-col items-center space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-red-600" />
        <p className="text-gray-700 font-medium">{text}</p>
      </div>
    </div>
  );

  // Tooltip Component
  const Tooltip = ({ children, content }) => {
    const [isVisible, setIsVisible] = useState(false);
    
    return (
      <div className="relative inline-block">
        <div
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          {children}
        </div>
        {isVisible && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap z-10">
            {content}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </div>
    );
  };

  // Login handler com loading
  const handleLogin = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setCurrentScreen('activate');
    setLoading(false);
  };

  // Splash screen controlado pelo user click
  const handleSplashClick = () => {
    if (currentScreen === 'splash') {
      setCurrentScreen('login');
    }
  };

  const tiers = [
    { name: 'FAN', tokens: 50, monthlyEarnings: 2.5, multiplier: 1, color: 'bg-gray-500' },
    { name: 'HOLDER', tokens: 500, monthlyEarnings: 50, multiplier: 2, color: 'bg-red-600' },
    { name: 'PRO', tokens: 1500, monthlyEarnings: 225, multiplier: 3, color: 'bg-yellow-600' },
    { name: 'LEGEND', tokens: 5000, monthlyEarnings: 1250, multiplier: 5, color: 'bg-purple-600' }
  ];

  // Orbiting Tokens Background Component
  const OrbitingTokens = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Center point for orbits */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Token 1 */}
        <div className="absolute animate-orbit-1">
          <img 
            src={SPFC_ASSETS.fanToken}
            alt="SPFC Token"
            className="w-8 h-8 opacity-30 animate-pulse"
          />
        </div>
        
        {/* Token 2 */}
        <div className="absolute animate-orbit-2">
          <img 
            src={SPFC_ASSETS.fanToken}
            alt="SPFC Token"
            className="w-6 h-6 opacity-25 animate-float"
          />
        </div>
        
        {/* Token 3 */}
        <div className="absolute animate-orbit-3">
          <img 
            src={SPFC_ASSETS.fanToken}
            alt="SPFC Token"
            className="w-10 h-10 opacity-20 animate-pulse"
          />
        </div>
        
        {/* Token 4 */}
        <div className="absolute animate-orbit-4">
          <img 
            src={SPFC_ASSETS.fanToken}
            alt="SPFC Token"
            className="w-7 h-7 opacity-35 animate-float"
          />
        </div>
        
        {/* Token 5 */}
        <div className="absolute animate-orbit-5">
          <img 
            src={SPFC_ASSETS.fanToken}
            alt="SPFC Token"
            className="w-5 h-5 opacity-15 animate-pulse"
          />
        </div>
        
        {/* Token 6 */}
        <div className="absolute animate-orbit-6">
          <img 
            src={SPFC_ASSETS.fanToken}
            alt="SPFC Token"
            className="w-9 h-9 opacity-40 animate-float"
          />
        </div>
      </div>
    </div>
  );

  const benefits = [
    { name: 'Sócio-Torcedor', points: 500, value: 50, icon: Shield },
    { name: 'Ingresso', points: 300, value: 30, icon: Calendar },
    { name: 'Produtos', points: 150, discount: 15, icon: ShoppingBag },
    { name: 'Camarote VIP', points: 5000, tier: 'LEGEND', icon: Crown }
  ];

  const SplashScreen = () => (
    <div 
      className="h-screen flex flex-col items-center justify-center text-white relative overflow-hidden cursor-pointer"
      onClick={handleSplashClick}
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 25%, #1a1a1a 50%, #2d2d2d 75%, #1a1a1a 100%)'
      }}
    >
      {/* Epic Background Theme - Full Santo + Vault Scene */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url('nQ7BCVsN4pAQwdzkNhl8j')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Tech Overlay - Futuristic Dark Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-black/40 to-gray-900/80"></div>
      

      
      {/* Main content - Clean & Minimal */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Clean Logo Section */}
        <div className="text-center mb-16">
          {/* Minimal Text Branding */}
          <h1 className="text-3xl font-bold mb-4 text-white drop-shadow-lg tracking-wide">
            TORCE<span className="text-red-500">HOLDER</span>
          </h1>
          
          <p className="text-gray-300 text-base font-medium mb-2">
            O Cofre Digital do Torcedor
          </p>
          
          <p className="text-gray-500 text-sm">
            Powered by Santo Guardião
          </p>
        </div>
        
        {/* Error Display - Clean */}
        {error && (
          <div className="mb-8 bg-red-500/20 border border-red-500/50 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-red-200 text-sm text-center">{error}</p>
          </div>
        )}
        
        {/* CTA Button - Futuristic Tech Style */}
        <button
          onClick={() => safeExec(async () => {
            await new Promise(resolve => setTimeout(resolve, 500));
            setCurrentScreen('main');
          })}
          disabled={loading}
          className="relative group bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-500 hover:via-red-600 hover:to-red-700 disabled:from-gray-600 disabled:via-gray-700 disabled:to-gray-600 text-white font-black py-5 px-12 rounded-2xl shadow-2xl transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed border border-red-600/50 transition-all duration-300 overflow-hidden"
          style={{
            textShadow: '0 2px 4px rgba(0,0,0,0.8)',
            boxShadow: '0 20px 40px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)',
          }}
        >
          {/* Tech Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30 rounded-2xl"></div>
          
          {/* Scan Line Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/30 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-all duration-500"></div>
          
          {/* Pulsating Tech Ring */}
          <div className="absolute inset-0 rounded-2xl border border-red-500/50 opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-110 transition-all duration-300"></div>
          <div className="flex items-center justify-center relative z-10">
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-red-400 border-t-transparent mr-3"></div>
                <span className="text-lg tracking-wide font-black uppercase">CONECTANDO...</span>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-red-400 border-t-transparent ml-3"></div>
              </>
            ) : (
              <>
                <Shield className="w-6 h-6 mr-3 text-red-400 drop-shadow-lg" />
                <span className="text-lg tracking-wide font-black uppercase drop-shadow-lg">ACESSAR COFRE</span>
                <Shield className="w-6 h-6 ml-3 text-red-400 drop-shadow-lg" />
              </>
            )}
          </div>
          
          {/* Ripple Effect on Click */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-active:opacity-100 bg-gradient-to-r from-red-600/40 to-red-700/40 animate-ping transition-opacity duration-200"></div>
        </button>
        
        {/* Clean Status Indicator */}
        {!loading && (
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm font-medium">
              ⚡ Pronto para acessar ⚡
            </p>
          </div>
        )}
      </div>
      

    </div>
  );

  // Mock data for MVP demo
  const [mockBalance] = useState(1250.75);
  const [stakedAmount, setStakedAmount] = useState(850.50);
  const [rewards] = useState(42.15);
  const [stakeInput, setStakeInput] = useState('');

  const MVPDashboard = () => (
    <div className="h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Santo Guardian Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url('${SPFC_ASSETS.santoGuardian}')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      
      {/* Header */}
      <div className="relative z-10 px-6 py-6 border-b border-red-600/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={SPFC_ASSETS.logo}
              alt="SPFC"
              className="w-8 h-8 mr-3"
            />
            <h1 className="text-xl font-bold text-white">
              TORCE<span className="text-red-600">HOLDER</span>
            </h1>
          </div>
          <div className="bg-green-600 px-3 py-1 rounded-full">
            <span className="text-white text-sm font-medium">Conectado</span>
          </div>
        </div>
      </div>
      
      {/* Main Dashboard */}
      <div className="relative z-10 flex-1 px-6 py-8">
        <div className="max-w-md mx-auto space-y-6">
          
          {/* Balance Card */}
          <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-red-600/30">
            <div className="text-center">
              <p className="text-gray-300 text-sm mb-2">Saldo Disponível</p>
              <p className="text-white text-3xl font-bold mb-1">{mockBalance.toFixed(2)} SPFC</p>
              <p className="text-green-400 text-sm">≈ € {(mockBalance * 0.027).toFixed(2)}</p>
            </div>
          </div>
          
          {/* Staking Card */}
          <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-red-600/30">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-white font-semibold">Staked no Cofre</p>
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <p className="text-red-400 text-2xl font-bold">{stakedAmount.toFixed(2)} SPFC</p>
              <p className="text-green-400 text-sm mt-1">Rewards: +{rewards.toFixed(2)} SPFC</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-3 mb-4">
              <p className="text-gray-300 text-xs mb-1">APY</p>
              <p className="text-yellow-400 text-lg font-bold">12.5%</p>
            </div>
          </div>

          {/* Stake/Unstake Actions */}
          <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-red-600/30">
            <div className="mb-4">
              <input
                type="number"
                placeholder="Quantidade SPFC"
                value={stakeInput}
                onChange={(e) => setStakeInput(e.target.value)}
                className="w-full bg-gray-800/50 text-white rounded-xl p-3 border border-gray-600/50 focus:border-red-600/50 focus:outline-none"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={async () => {
                  const amount = parseFloat(stakeInput) || 0;
                  if (amount > 0 && amount <= mockBalance) {
                    setLoading(true);
                    await new Promise(resolve => setTimeout(resolve, 1500));
                    setStakedAmount(prev => prev + amount);
                    setStakeInput('');
                    setLoading(false);
                  }
                }}
                disabled={loading}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-xl font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Lock className="w-4 h-4 mr-2" />}
                STAKE
              </button>
              
              <button
                onClick={() => {
                  const amount = parseFloat(stakeInput) || 0;
                  if (amount > 0 && amount <= stakedAmount) {
                    setStakedAmount(prev => Math.max(0, prev - amount));
                    setStakeInput('');
                  }
                }}
                className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-3 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
              >
                🔓 UNSTAKE
              </button>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-3">
            <button 
              onClick={() => setStakeInput((mockBalance/4).toFixed(0))}
              className="bg-red-600/20 text-red-400 py-2 px-3 rounded-lg text-sm font-medium hover:bg-red-600/30 transition-all"
            >
              25%
            </button>
            <button 
              onClick={() => setStakeInput((mockBalance/2).toFixed(0))}
              className="bg-red-600/20 text-red-400 py-2 px-3 rounded-lg text-sm font-medium hover:bg-red-600/30 transition-all"
            >
              50%
            </button>
            <button 
              onClick={() => setStakeInput(mockBalance.toFixed(0))}
              className="bg-red-600/20 text-red-400 py-2 px-3 rounded-lg text-sm font-medium hover:bg-red-600/30 transition-all"
            >
              MAX
            </button>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Status */}
      <div className="relative z-10 px-6 py-4 border-t border-red-600/30">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            ✨ Protegido pelo Santo Guardião ✨
          </p>
        </div>
      </div>
    </div>
  );

  const LoginScreen = () => (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black flex flex-col items-center justify-center px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-600/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-500/15 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="text-center z-10 max-w-md w-full">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={SPFC_ASSETS.logo} 
            alt="TorceHolder" 
            className="w-24 h-24 mx-auto mb-4 animate-pulse-3d"
          />
          <h1 className="text-4xl font-bold text-white mb-2 text-shadow-lg font-inter">
            Torce<span className="text-red-500">Holder</span>
          </h1>
          <p className="text-gray-300 text-lg font-medium">
            Seu cofre digital tricolor
          </p>
        </div>

        {/* Welcome Message */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Bem-vindo, Torcedor!
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Conecte sua carteira para começar a fazer stake dos seus Fan Tokens $SPFC 
            e desbloquear benefícios exclusivos.
          </p>
        </div>

        {/* Connect Button */}
        <button
          onClick={connectWallet}
          disabled={loading}
          className="group relative w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <div className="flex items-center justify-center space-x-3">
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="font-inter">Conectando com sua carteira...</span>
              </>
            ) : (
              <>
                <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-inter">Conectar Carteira</span>
              </>
            )}
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
        </button>

        {/* Security Info */}
        <div className="mt-8 flex items-center justify-center space-x-2 text-sm text-gray-500">
          <Lock className="w-4 h-4" />
          <span>Conexão segura e criptografada</span>
        </div>
      </div>
    </div>
  );

  // Original content below (remove if not needed)
  const OriginalLoginContent = () => (
    <div>
      <div className="flex-1 px-6 py-8">
        <div className="max-w-sm mx-auto space-y-4">
          <button 
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-5 flex items-center justify-between hover:from-gray-100 hover:to-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:transform-none"
          >
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg" style={{filter: 'drop-shadow(0 6px 12px rgba(59, 130, 246, 0.4))'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-white">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <span className="font-semibold text-gray-800 text-lg">Continuar com Google</span>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </button>

          <button 
            onClick={() => setCurrentScreen('activate')}
            className="w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 flex items-center justify-between hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center mr-4 shadow-lg" style={{filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.5))'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-white">
                  <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <span className="font-semibold text-white text-lg">
                {loading ? 'Autenticando...' : 'Continuar com Apple'}
              </span>
            </div>
            {loading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            ) : (
              <ChevronRight className="w-6 h-6 text-gray-300" />
            )}
          </button>

          <button 
            onClick={() => safeExec(async () => {
              await new Promise(resolve => setTimeout(resolve, 1500)); // Mock login delay
              setCurrentScreen('activate');
            })}
            disabled={loading}
            className="w-full bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-5 flex items-center justify-between hover:from-red-500 hover:to-red-600 disabled:from-red-600/50 disabled:to-red-700/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-500/30 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed"
          >
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mr-4 shadow-lg border-2 border-white/30" style={{filter: 'drop-shadow(0 6px 12px rgba(239, 68, 68, 0.5))'}}>
                <svg width="28" height="28" viewBox="0 0 100 100" className="text-white">
                  <rect width="100" height="60" fill="#DC2626" rx="4"/>
                  <rect width="100" height="20" y="40" fill="#000000"/>
                  <rect width="100" height="20" y="60" fill="#FFFFFF"/>
                  <polygon points="20,15 40,5 60,15 40,25" fill="#FFFFFF"/>
                  <text x="50" y="35" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FFFFFF">SPFC</text>
                  <circle cx="15" cy="15" r="3" fill="#FFD700"/>
                  <circle cx="85" cy="15" r="3" fill="#FFD700"/>
                </svg>
              </div>
              <span className="font-semibold text-white text-lg">
                {loading ? 'Autenticando...' : 'Sócio Torcedor SPFC'}
              </span>
            </div>
            {loading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            ) : (
              <ChevronRight className="w-6 h-6 text-red-200" />
            )}
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">Ao continuar, você aceita nossos</p>
          <div className="flex justify-center space-x-4 text-xs text-red-600">
            <a href="#" className="underline">Termos de Uso</a>
            <a href="#" className="underline">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </div>
  );

  const ActivateScreen = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    
    const handleActivateVault = async () => {
      await safeExec(async () => {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Mock activation process
        localStorage.setItem('cofreActivated', 'true');
        setCurrentScreen('dashboard');
      });
    };
    
    return (
    <div className="h-screen bg-gradient-to-br from-red-50 to-red-100 flex flex-col">
      <div className="bg-gradient-to-r from-red-600 to-red-800 px-6 py-6 text-white">
        <h1 className="text-xl font-bold text-center">Ativar Cofre</h1>
      </div>

      <div className="flex-1 px-6 py-8 flex flex-col items-center">
        <div className="relative mb-8">
          {/* Main vault display */}
          <div className="w-56 h-56 bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
            {/* Vault details */}
            <div className="absolute inset-4 border-2 border-red-300 border-opacity-30 rounded-2xl"></div>
            <div className="absolute inset-6 border border-red-400 border-opacity-20 rounded-xl"></div>
            
            {/* Central SPFC logo */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <img 
                src={SPFC_ASSETS.logo}
                alt="SPFC Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
            
            {/* Lock and security indicators */}
            <Lock className="absolute top-6 right-6 w-8 h-8 text-yellow-300 drop-shadow-lg" />
            <Shield className="absolute bottom-6 left-6 w-6 h-6 text-green-400 drop-shadow-lg" />
            
            {/* Glow effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-transparent opacity-20 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-white to-transparent opacity-10 rounded-3xl"></div>
          </div>
          
          {/* Floating tokens around vault */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl animate-float"
              style={{
                top: `${15 + Math.sin(i * 1.2) * 40}%`,
                left: `${10 + Math.cos(i * 1.2) * 45}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            >
              <img 
                src={SPFC_ASSETS.logo}
                alt="SPFC Token"
                className="w-5 h-5 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Explanation Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-sm mb-4">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Como funciona?</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Seu cofre TorceHolder transforma Fan Tokens em benefícios reais. 
              Guarde seus $SPFC e receba pontos mensais para usar no Morumbi.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-sm mb-6">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Seu Status Inicial</h3>
            <div className="text-2xl font-bold text-gray-800 mb-1">500 $SPFC</div>
            <p className="text-red-600 font-semibold">≈ R$ 50/mês em benefícios</p>
          </div>
          
          <div className="bg-red-600 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Crown className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white font-bold">TIER HOLDER</span>
            </div>
            <p className="text-red-100 text-sm">Multiplier 2x nos pontos</p>
          </div>
        </div>

        {error && (
          <div className="mb-4 bg-red-500/20 border border-red-500/50 rounded-lg p-3 w-full max-w-sm">
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        )}
        
        <button 
          onClick={() => setShowConfirmModal(true)}
          disabled={loading}
          className="w-full max-w-sm bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:from-red-600/50 disabled:to-red-700/50 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed"
        >
          <div className="flex items-center justify-center">
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Ativando...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5 mr-2" />
                Ativar Cofre
              </>
            )}
          </div>
          
          {/* Ripple Effect on Click */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-active:opacity-100 bg-gradient-to-r from-red-600/40 to-red-700/40 animate-ping transition-opacity duration-200"></div>
        </button>
        
        {/* Confirmation Modal */}
        {showConfirmModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Ativar Cofre TorceHolder?</h3>
                <p className="text-sm text-gray-600">
                  Você está criando seu cofre digital seguro. Seus tokens permanecerão protegidos e renderão pontos mensais.
                </p>
              </div>
              
              <div className="space-y-3">
                <button 
                  onClick={handleActivateVault}
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white font-semibold py-3 rounded-xl transition-colors disabled:cursor-not-allowed"
                >
                  {loading ? 'Ativando...' : 'Confirmar Ativação'}
                </button>
                <button 
                  onClick={() => setShowConfirmModal(false)}
                  disabled={loading}
                  className="w-full bg-gray-100 hover:bg-gray-200 disabled:bg-gray-100/50 text-gray-700 font-semibold py-3 rounded-xl transition-colors disabled:cursor-not-allowed"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        <p className="text-xs text-gray-500 text-center mt-6 px-4">
          ✅ Sem promessas financeiras • ✅ Benefícios tangíveis • ✅ 100% seguro
        </p>
      </div>
    </div>
    );
  };

  const DashboardScreen = () => {
    const [showInfoModal, setShowInfoModal] = useState(false);
    
    const truncateAddress = (address) => {
      return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };
    
    return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-red-900/30 px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-4">
            <img 
              src={SPFC_ASSETS.logo} 
              alt="TorceHolder" 
              className="w-10 h-10"
            />
            <div>
              <h1 className="text-xl font-bold text-white font-inter">
                Olá, Torcedor!
              </h1>
              <p className="text-gray-400 text-sm">
                {userData ? truncateAddress(userData.address) : 'Desconectado'}
              </p>
            </div>
          </div>
          
          <button
            onClick={disconnectWallet}
            className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 text-sm"
          >
            <span>Desconectar</span>
            <ChevronRight className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8 max-w-6xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* SPFC Balance Card */}
          <div className="bg-black/30 backdrop-blur-sm border border-red-900/30 rounded-2xl p-6 hover:bg-black/40 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm font-medium">Saldo $SPFC</p>
                <p className="text-2xl font-bold text-white font-inter">
                  {userData ? userData.spfcBalance.toLocaleString('pt-BR', { maximumFractionDigits: 2 }) : '0.00'}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Tier: <span className="text-yellow-400 font-semibold">{userData ? userData.tier : 'N/A'}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Points Card */}
          <div className="bg-black/30 backdrop-blur-sm border border-red-900/30 rounded-2xl p-6 hover:bg-black/40 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm font-medium">Meus Pontos</p>
                <p className="text-2xl font-bold text-white font-inter">
                  {userData ? userData.points.toLocaleString('pt-BR') : '0'}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Streak: <span className="text-red-400 font-semibold">{userData ? userData.streak : 0} dias</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <button 
            onClick={() => setCurrentScreen('stake')}
            className="group relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-bold py-6 px-12 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-glow"
          >
            <div className="flex items-center justify-center space-x-4">
              <Lock className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-xl font-inter">Fazer Stake</span>
              <TrendingUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            
            {/* Subtitle */}
            <p className="text-red-200 text-sm mt-2 opacity-90">
              Deposite seus $SPFC e ganhe recompensas
            </p>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
          </button>
          
          <p className="text-gray-500 text-sm mt-4">
            {userData ? `Membro desde ${new Date(userData.joinedDate).toLocaleDateString('pt-BR')}` : ''}
          </p>
        </div>
      </main>
    </div>
    );
  };

  const StakeEarnScreen = () => (
    <div className="h-screen bg-gradient-to-b from-red-600 via-red-700 to-blue-900 flex flex-col relative">
      <OrbitingTokens />
      {/* Header inspired by SPFC app */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 px-6 py-8 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url('${SPFC_ASSETS.tokenApp}')`,
          }}
        ></div>
        <div className="relative z-10">
          {/* SPFC Header */}
          <div className="text-center mb-6">
            <img 
              src={SPFC_ASSETS.fanToken}
              alt="SPFC Fan Token"
              className="w-16 h-16 mx-auto mb-3 object-contain drop-shadow-lg"
            />
            <h1 className="text-3xl font-black text-white">SPFC</h1>
            <p className="text-red-200 text-sm font-medium">São Paulo FC</p>
          </div>
          
          {/* Balance Display */}
          <div className="bg-black/30 rounded-2xl p-4 backdrop-blur-sm border border-white/20 text-center">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Saldo</p>
                <p className="text-2xl font-bold text-white">{userTokens} SPFC</p>
                <p className="text-xs text-gray-400">≈€{(userTokens * 0.027).toFixed(2)}</p>
              </div>
              <div className="text-right">
                <div className="bg-red-600 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold">{userTier}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 py-6 overflow-y-auto">
        {/* Streak System */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-5 mb-4 border border-orange-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-3">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <Tooltip content="Dias consecutivos de engajamento no app TorceHolder">
                  <h3 className="text-lg font-bold text-gray-800 cursor-help">Streak Ativo <HelpCircle className="w-4 h-4 inline ml-1 opacity-50" /></h3>
                </Tooltip>
                <p className="text-sm text-gray-600">Dias consecutivos stakando</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-orange-600">{streakData.currentStreak}</p>
              <p className="text-xs text-gray-600">dias</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-3 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Multiplicador</span>
              <span className="text-lg font-bold text-green-600">{streakData.multiplier}x</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${(streakData.currentStreak / streakData.nextMilestone) * 100}%`
                }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 text-center">{streakData.nextMilestone - streakData.currentStreak} dias para +0.5x boost</p>
          </div>
          
          <div className="bg-green-100 rounded-xl p-3 border border-green-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm text-green-800 font-medium">Bonus Mensal</span>
              </div>
              <span className="font-bold text-green-600 text-sm">+{streakData.estimatedBonus} SPFC</span>
            </div>
          </div>
        </div>
        
        {/* Achievement Preview */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-5 mb-4 border border-purple-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <Tooltip content="Conquistas desbloqueadas guardadas no seu cofre digital">
                  <h3 className="text-lg font-bold text-gray-800 cursor-help">Conquistas <HelpCircle className="w-4 h-4 inline ml-1 opacity-50" /></h3>
                </Tooltip>
                <p className="text-sm text-gray-600">{achievements.filter(a => a.earned).length} de {achievements.length} desbloqueadas</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-black text-purple-600">{totalAchievementPoints.toLocaleString()}</p>
              <p className="text-xs text-gray-600">pontos</p>
            </div>
          </div>
          
          {/* Achievement Mini Grid */}
          <div className="grid grid-cols-4 gap-2 mb-3">
            {achievements.map(achievement => {
              const rarityColors = {
                common: 'bg-gray-200 border-gray-400',
                rare: 'bg-blue-200 border-blue-400', 
                legendary: 'bg-purple-200 border-purple-400',
                mythic: 'bg-yellow-200 border-yellow-400'
              };
              
              return (
                <div 
                  key={achievement.id}
                  className={`
                    relative p-2 rounded-lg border transition-all duration-300
                    ${achievement.earned 
                      ? rarityColors[achievement.rarity] + ' shadow-sm' 
                      : 'bg-gray-100 border-gray-300 opacity-50'
                    }
                  `}
                >
                  {achievement.earned && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <achievement.icon className="w-5 h-5 mx-auto mb-1 text-gray-700" />
                    <p className="text-xs font-medium leading-tight">{achievement.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <button 
            onClick={() => setCurrentScreen('achievements')}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-xl text-sm font-bold hover:bg-purple-700 transition-colors"
          >
            Ver Todas
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
            <div 
              className="absolute top-4 right-4 w-16 h-16 opacity-10"
              style={{
                backgroundImage: `url('${SPFC_ASSETS.safe}')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            ></div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">Tokens no Cofre</h3>
              <Coins className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold text-red-600 mb-2">{userTokens} $SPFC</div>
            <div className="text-sm text-gray-600">Tier {userTier} • Boost 2x ativo</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                <Gift className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm font-medium text-gray-600">Cashback</span>
              </div>
              <div className="text-xl font-bold text-gray-800">{cashbackPoints} pts</div>
              <div className="text-xs text-green-600">≈ R$ {cashbackPoints / 10}</div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-sm font-medium text-gray-600">Earnings</span>
              </div>
              <div className="text-xl font-bold text-gray-800">+R$ {monthlyEarnings}</div>
              <div className="text-xs text-blue-600">por mês</div>
            </div>
          </div>
        </div>

        {/* Token Chart Section */}
        <div className="mb-6">
          <div className="bg-gradient-to-b from-blue-800 to-blue-900 rounded-2xl p-6 text-white relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('${SPFC_ASSETS.tokenChart}')`,
              }}
            ></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">1 SPFC ≈€ 0.027</h3>
                  <p className="text-green-400 text-sm font-semibold">+€0.000758 (+2.8885%)</p>
                </div>
                <div className="text-right">
                  <div className="flex space-x-2 text-xs">
                    <span className="bg-blue-600 px-2 py-1 rounded">1d</span>
                    <span className="bg-blue-700 px-2 py-1 rounded">7d</span>
                    <span className="bg-blue-800 px-2 py-1 rounded">30d</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stake & Earn Section */}
          <div className="bg-blue-800/80 rounded-2xl p-4 text-white mb-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-lg">Stake & Earn</h4>
                <p className="text-blue-200 text-sm">Stake Fan Tokens and earn Reward Points</p>
              </div>
              <ChevronRight className="w-6 h-6 text-blue-300" />
            </div>
          </div>
          
          <h3 className="font-bold text-gray-800 mb-4">Próximos Benefícios</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-2 right-2 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <Calendar className="w-4 h-4 text-red-600" />
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-3">
                  <img 
                    src={SPFC_ASSETS.logo}
                    alt="SPFC"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <div className="font-medium text-gray-800">Ingresso São Paulo x Palmeiras</div>
                  <div className="text-sm text-red-600 font-semibold">300 pontos • R$ 30</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-2 right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                  <img 
                    src={SPFC_ASSETS.logo}
                    alt="SPFC"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <div className="font-medium text-gray-800">Camisa Oficial 2024</div>
                  <div className="text-sm text-blue-600 font-semibold">15% de desconto</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center space-x-6 mb-6">
          <button className="text-white font-semibold border-b-2 border-white pb-2">Token</button>
          <button className="text-blue-300 font-semibold hover:text-white transition-colors" onClick={() => setCurrentScreen('stake')}>Stake</button>
          <button className="text-blue-300 font-semibold hover:text-white transition-colors" onClick={() => setCurrentScreen('benefits')}>Rewards</button>
          <button className="text-blue-300 font-semibold hover:text-white transition-colors">Info</button>
        </div>
        
        {/* Action Buttons - SPFC Style */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            onClick={() => setCurrentScreen('stake')}
          >
            <div className="flex items-center justify-center">
              <Coins className="w-5 h-5 mr-2" />
              <span className="text-lg">Stake & Earn</span>
            </div>
          </button>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-colors"
            onClick={() => {
              setError('Trading será liberado em breve! 🚀');
              setTimeout(() => setError(null), 3000);
            }}
          >
            <span className="text-lg">Trade</span>
          </button>
        </div>
        
        {/* Info Modal */}
        {showInfoModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">TorceHolder Info</h3>
                <div className="text-left space-y-3 text-sm text-gray-600">
                  <p>✅ <strong>Cofre Seguro:</strong> Seus tokens ficam protegidos e rendem pontos mensais.</p>
                  <p>✅ <strong>Sem Especulação:</strong> Foco em benefícios tangíveis para torcedores.</p>
                  <p>✅ <strong>Cashback Real:</strong> Use pontos em ingressos, produtos e experiências.</p>
                  <p>✅ <strong>Tier System:</strong> Quanto mais tokens, mais benefícios você recebe.</p>
                </div>
              </div>
              
              <button 
                onClick={() => setShowInfoModal(false)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Entendi!
              </button>
            </div>
          </div>
        )}
        
        {/* Error Toast */}
        {error && (
          <div className="fixed top-4 left-4 right-4 bg-blue-500/90 text-white p-3 rounded-lg z-40 text-center backdrop-blur-sm">
            {error}
          </div>
        )}
      </div>
    </div>
    );
  };

  const StakeEarnScreen = () => (
    <div className="h-screen bg-gradient-to-b from-blue-600 via-blue-700 to-red-900 flex flex-col relative">
      <OrbitingTokens />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('${SPFC_ASSETS.stakeEarn}')`,
          }}
        ></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => setCurrentScreen('dashboard')} 
              className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 transform rotate-180" />
            </button>
            <div className="flex items-center space-x-4">
              <button className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Price Display */}
          <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-4 mb-4">
            <div className="text-sm text-blue-200 mb-1">1 SPFC ≈€ {stakeData.currentPrice}</div>
            <div className="text-2xl font-bold mb-2">1 SPFC ≈€ {stakeData.currentPrice}</div>
            <div className="text-green-400 text-sm font-medium">
              +€{stakeData.priceChange} (+{stakeData.priceChangePercent}%)
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse-3d">
              <Coins className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-black text-white mb-2">Stake & Earn</h1>
            <p className="text-blue-200 text-lg font-medium">Transforme Fan Tokens em Benefícios</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 py-6 overflow-y-auto">
        {/* Sua Posição no Cofre */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Shield className="w-6 h-6 text-blue-600 mr-2" />
            Sua Posição no TorceVault
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <p className="text-2xl font-black text-blue-600">{stakeData.walletBalance.toLocaleString()}</p>
              <p className="text-sm text-gray-600">$SPFC na Carteira</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-green-600">{stakeData.stakedTokens.toLocaleString()}</p>
              <p className="text-sm text-gray-600">$SPFC em Staking</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-700">Seus Pontos Acumulados</span>
              <span className="text-lg font-black text-purple-600">{stakeData.accumulatedPoints.toLocaleString()}</span>
            </div>
            <div className="text-xs text-gray-600">Ganhe 10 pontos por dia para cada Fan Token em staking!</div>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-3 mb-4 border border-yellow-200">
            <div className="flex justify-between items-center">
              <span className="text-sm text-yellow-800 font-medium">Cashback Estimado</span>
              <span className="text-lg font-black text-yellow-600">R$ {(stakeData.accumulatedPoints / 100 * 10).toLocaleString()}</span>
            </div>
            <div className="text-xs text-yellow-700">100 pontos = R$ 10 de desconto</div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors text-sm">
              Depositar $SPFC
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl transition-colors text-sm">
              Retirar $SPFC
            </button>
          </div>
        </div>

        {/* Simulador de Ganhos */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
            Simule Seus Ganhos
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantidade de $SPFC</label>
              <input 
                type="number" 
                value={simulatorData.tokensToStake}
                onChange={(e) => setSimulatorData({...simulatorData, tokensToStake: parseInt(e.target.value) || 0})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Período (meses)</label>
              <select 
                value={simulatorData.periodMonths}
                onChange={(e) => setSimulatorData({...simulatorData, periodMonths: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={1}>1 mês</option>
                <option value={3}>3 meses</option>
                <option value={6}>6 meses</option>
                <option value={12}>12 meses</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Seu Tier</label>
              <select 
                value={simulatorData.selectedTier}
                onChange={(e) => setSimulatorData({...simulatorData, selectedTier: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="FAN">FAN (1x)</option>
                <option value="HOLDER">HOLDER (2x)</option>
                <option value="PRO">PRO (3x)</option>
                <option value="LEGEND">LEGEND (5x)</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-lg font-black text-blue-600">
                  {Math.round(simulatorData.tokensToStake * 0.005 * tiers.find(t => t.name === simulatorData.selectedTier)?.multiplier * 100) || 0}
                </p>
                <p className="text-xs text-gray-600">Pontos/mês</p>
              </div>
              <div>
                <p className="text-lg font-black text-green-600">
                  R$ {Math.round(simulatorData.tokensToStake * 0.005 * tiers.find(t => t.name === simulatorData.selectedTier)?.multiplier * simulatorData.periodMonths * 10) || 0}
                </p>
                <p className="text-xs text-gray-600">Cashback Total</p>
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="text-sm text-gray-700 font-medium">
                Projeção para {simulatorData.periodMonths} meses como {simulatorData.selectedTier}
              </p>
            </div>
          </div>
        </div>

        {/* Níveis de Engajamento */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Crown className="w-6 h-6 text-purple-600 mr-2" />
            Níveis de Engajamento
          </h3>
          
          <div className="space-y-3">
            {tiers.map((tier, index) => {
              const isCurrentTier = tier.name === userTier;
              const isUnlocked = stakeData.stakedTokens >= tier.tokens;
              
              return (
                <div 
                  key={index}
                  className={`
                    p-4 rounded-lg border-2 transition-all duration-300
                    ${isCurrentTier ? 'border-blue-500 bg-blue-50' : isUnlocked ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50'}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold
                        ${tier.color} text-white
                      `}>
                        {tier.multiplier}x
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{tier.name}</p>
                        <p className="text-xs text-gray-600">{tier.tokens.toLocaleString()} $SPFC</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-green-600">R$ {tier.monthlyEarnings}/mês</p>
                      {isCurrentTier && <p className="text-xs text-blue-600 font-medium">ATUAL</p>}
                      {!isCurrentTier && isUnlocked && <p className="text-xs text-green-600 font-medium">DESBLOQUEADO</p>}
                      {!isUnlocked && <p className="text-xs text-gray-500">BLOQUEADO</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Jornada do Torcedor */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Flame className="w-6 h-6 text-orange-600 mr-2" />
            Sua Jornada de Torcedor
          </h3>
          
          <div className="bg-orange-50 rounded-lg p-4 mb-4 border border-orange-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Flame className="w-5 h-5 text-orange-600 mr-2" />
                <span className="font-bold text-orange-800">Streak Atual</span>
              </div>
              <span className="text-2xl font-black text-orange-600">{streakData.currentStreak} dias</span>
            </div>
            
            <div className="w-full bg-orange-200 rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${(streakData.currentStreak / streakData.nextMilestone) * 100}%`
                }}
              ></div>
            </div>
            <p className="text-xs text-orange-700">{streakData.nextMilestone - streakData.currentStreak} dias para multiplicador 1.5x</p>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {achievements.slice(0, 3).map(achievement => (
              <div 
                key={achievement.id}
                className={`
                  p-3 rounded-lg text-center border-2 transition-all duration-300
                  ${achievement.earned ? 'border-purple-400 bg-purple-50' : 'border-gray-200 bg-gray-50 opacity-60'}
                `}
              >
                <div className="text-lg mb-1">{achievement.earned ? achievement.icon : '🔒'}</div>
                <div className="text-xs font-bold text-gray-800">{achievement.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access to Benefits */}
        <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-xl p-6 text-white mb-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Gift className="w-6 h-6 mr-2" />
            Catálogo de Benefícios
          </h3>
          
          <div className="space-y-3">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <benefit.icon className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-medium text-sm">{benefit.name}</p>
                    <p className="text-xs opacity-80">{benefit.points} pontos</p>
                  </div>
                </div>
                <button className="bg-white/30 px-3 py-1 rounded-lg text-xs font-bold hover:bg-white/40 transition-colors">
                  Resgatar
                </button>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => setCurrentScreen('benefits')}
            className="w-full bg-white/30 hover:bg-white/40 text-white font-bold py-3 px-4 rounded-xl transition-colors mt-4"
          >
            Ver Todos os Benefícios
          </button>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Comece Agora!</h3>
          <p className="text-sm mb-4 opacity-90">
            Seus Fan Tokens parados viram desconto real no São Paulo.
            Quanto mais você guarda, mais você economiza no clube.
          </p>
          <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors">
            Fazer Primeiro Stake
          </button>
        </div>
      </div>
    </div>
  );

  const BenefitsScreen = () => (
    <div className="h-screen bg-gradient-to-b from-red-600 via-red-700 to-blue-900 flex flex-col">
      {/* Header with SPFC styling */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 px-6 py-8 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url('${SPFC_ASSETS.rewards}')`,
          }}
        ></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => setCurrentScreen('dashboard')} 
              className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 transform rotate-180" />
            </button>
            <div className="flex items-center space-x-4">
              <button className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </button>
              <button className="bg-red-700 px-4 py-2 rounded-full text-sm font-semibold">Follow</button>
            </div>
          </div>
          
          {/* SPFC Header */}
          <div className="text-center">
            <img 
              src={SPFC_ASSETS.fanToken}
              alt="SPFC Fan Token"
              className="w-20 h-20 mx-auto mb-4 object-contain drop-shadow-lg"
            />
            <h1 className="text-4xl font-black text-white mb-2">SPFC</h1>
            <p className="text-red-200 text-lg font-medium">São Paulo FC</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-8 bg-blue-800/50 py-4">
        <button className="text-blue-300 font-semibold" onClick={() => setCurrentScreen('dashboard')}>Token</button>
        <button className="text-blue-300 font-semibold">Info</button>
        <button className="text-blue-300 font-semibold">Fan Zone</button>
        <button className="text-white font-semibold border-b-2 border-white pb-2">Rewards</button>
      </div>
      
      <div className="flex-1 px-6 py-6 overflow-y-auto">
        {/* Coming Soon Message */}
        <div className="text-center py-20">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-blue-800/30 rounded-full flex items-center justify-center mb-6">
              <Gift className="w-12 h-12 text-blue-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">More products coming soon.</h3>
            <p className="text-blue-200 text-lg">Watch this space!</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <benefit.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{benefit.name}</div>
                    <div className="text-sm text-gray-600">
                      {benefit.points} pontos
                      {benefit.value && ` = R$ ${benefit.value}`}
                      {benefit.discount && ` = -${benefit.discount}%`}
                      {benefit.tier && ` (${benefit.tier} apenas)`}
                    </div>
                  </div>
                </div>
                <button 
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    cashbackPoints >= benefit.points 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-gray-200 text-gray-500'
                  } transition-colors`}
                  disabled={cashbackPoints < benefit.points}
                >
                  {cashbackPoints >= benefit.points ? 'Resgatar' : 'Bloqueado'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* TorceHolder Integration Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-6 text-white relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('${SPFC_ASSETS.cofre3D}')`,
            }}
          ></div>
          <div className="relative z-10">
            <div className="text-center mb-6">
              <img 
                src={SPFC_ASSETS.cofre3D}
                alt="TorceHolder Vault"
                className="w-20 h-20 mx-auto mb-4 object-contain drop-shadow-lg"
              />
              <h3 className="font-bold text-2xl mb-2">TorceHolder</h3>
              <p className="text-red-200 text-sm">Stake seus SPFC tokens e ganhe rewards exclusivos</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-red-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Crown className="w-6 h-6 mr-3 text-yellow-400" />
                    <div>
                      <div className="font-bold">HOLDER TIER</div>
                      <div className="text-sm text-red-200">500+ tokens</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-yellow-400">2x Boost</div>
                    <div className="text-sm text-red-200">Ativo</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-700/50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold">{cashbackPoints}</div>
                  <div className="text-xs text-red-200">Reward Points</div>
                </div>
                <div className="bg-red-700/50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold">R$ {monthlyEarnings}</div>
                  <div className="text-xs text-red-200">Mensal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AchievementsScreen = () => (
    <div className="h-screen bg-gradient-to-b from-purple-600 via-purple-700 to-blue-900 flex flex-col relative">
      <OrbitingTokens />
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => setCurrentScreen('dashboard')} 
              className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 transform rotate-180" />
            </button>
            <div className="flex items-center space-x-4">
              <button className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
                <Trophy className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse-3d">
              <Crown className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-black text-white mb-2">Conquistas</h1>
            <p className="text-purple-200 text-lg font-medium">{totalAchievementPoints.toLocaleString()} pontos totais</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 py-6 overflow-y-auto">
        {/* Achievement Stats */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-black text-purple-600">{achievements.filter(a => a.earned).length}</p>
              <p className="text-xs text-gray-600">Desbloqueadas</p>
            </div>
            <div>
              <p className="text-2xl font-black text-orange-600">{achievements.length}</p>
              <p className="text-xs text-gray-600">Total</p>
            </div>
            <div>
              <p className="text-2xl font-black text-green-600">{Math.round((achievements.filter(a => a.earned).length / achievements.length) * 100)}%</p>
              <p className="text-xs text-gray-600">Progresso</p>
            </div>
          </div>
        </div>

        {/* Achievement List */}
        <div className="space-y-4">
          {achievements.map(achievement => {
            const rarityColors = {
              common: 'from-gray-400 to-gray-600',
              rare: 'from-blue-400 to-blue-600', 
              legendary: 'from-purple-400 to-purple-600',
              mythic: 'from-yellow-400 to-orange-500'
            };
            
            const rarityBorders = {
              common: 'border-gray-400',
              rare: 'border-blue-400', 
              legendary: 'border-purple-400',
              mythic: 'border-yellow-400'
            };
            
            return (
              <div 
                key={achievement.id}
                className={`
                  bg-white/95 backdrop-blur-sm rounded-xl p-4 border-2 transition-all duration-300
                  ${achievement.earned ? rarityBorders[achievement.rarity] + ' shadow-lg' : 'border-gray-200'}
                  ${!achievement.earned && 'opacity-60 grayscale'}
                `}
              >
                <div className="flex items-center">
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4 
                    bg-gradient-to-r ${rarityColors[achievement.rarity]}
                    ${achievement.earned ? 'animate-pulse-3d' : ''}
                  `}>
                    {achievement.earned ? achievement.icon : '🔒'}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">{achievement.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className={`
                        text-xs font-semibold px-2 py-1 rounded-full
                        ${achievement.rarity === 'common' && 'bg-gray-100 text-gray-600'}
                        ${achievement.rarity === 'rare' && 'bg-blue-100 text-blue-600'}
                        ${achievement.rarity === 'legendary' && 'bg-purple-100 text-purple-600'}
                        ${achievement.rarity === 'mythic' && 'bg-yellow-100 text-orange-600'}
                      `}>
                        {achievement.rarity.toUpperCase()}
                      </span>
                      <span className="text-lg font-black text-green-600">
                        +{achievement.points.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Progress */}
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white text-center">
          <div className="mb-4">
            <Flame className="w-8 h-8 mx-auto mb-2 animate-bounce" />
            <h3 className="text-xl font-bold">Continue Conquistando!</h3>
            <p className="text-purple-200 text-sm">Desbloqueie todas as conquistas para ganhar bônus especiais</p>
          </div>
          
          <div className="w-full bg-white/30 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500 animate-pulse"
              style={{
                width: `${(achievements.filter(a => a.earned).length / achievements.length) * 100}%`
              }}
            ></div>
          </div>
          <p className="text-xs text-purple-200 mt-2">
            {achievements.filter(a => a.earned).length} de {achievements.length} conquistadas
          </p>
        </div>
      </div>
    </div>
  );

  // Screen rendering function
  const renderCurrentScreen = () => {
    switch(currentScreen) {
      case 'splash': return <SplashScreen />;
      case 'login': return <LoginScreen />;
      case 'activate': return <ActivateScreen />;
      case 'dashboard': return <DashboardScreen />;
      case 'stake': return <StakeEarnScreen />;
      case 'achievements': return <AchievementsScreen />;
      case 'benefits': return <BenefitsScreen />;
      default: return <SplashScreen />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-2xl min-h-screen">
      {renderCurrentScreen()}
      {loading && <LoadingSpinner text="Conectando com sua carteira..." />}
    </div>
  );
}