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
  santoGuardian: 'ZvuhBbT8BaqpVzwH3ba9M',
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
  const goToStake = () => {
    setCurrentScreen('stake');
  };

  // Voltar do stake
  const goBackFromStake = () => {
    setCurrentScreen('dashboard');
  };

  // Navegar para benefícios
  const goToBenefits = () => {
    setCurrentScreen('benefits');
  };

  // Voltar dos benefícios
  const goBackFromBenefits = () => {
    setCurrentScreen('dashboard');
  };

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
    switch(period) {
      case '30': return 12;
      case '90': return 18;
      case '180': return 25;
      case '365': return 35;
      default: return 12;
    }
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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-black/40 to-gray-900/80"></div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg tracking-wide">
            TORCE<span className="text-red-500">HOLDER</span>
          </h1>
          <p className="text-gray-300 text-base font-medium mb-2">
            O Cofre Digital do Torcedor
          </p>
          <p className="text-gray-500 text-sm">
            Powered by Santo Guardião
          </p>
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
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-600/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-500/15 rounded-full blur-lg animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="text-center z-10 max-w-md w-full">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={SPFC_ASSETS.logo} 
            alt="TorceHolder" 
            className="w-24 h-24 mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-white mb-2">
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
                <span>Conectando com sua carteira...</span>
              </>
            ) : (
              <>
                <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Conectar Carteira</span>
              </>
            )}
          </div>
        </button>

        {/* Security Info */}
        <div className="mt-8 flex items-center justify-center space-x-2 text-sm text-gray-500">
          <Lock className="w-4 h-4" />
          <span>Conexão segura e criptografada</span>
        </div>
      </div>
    </div>
  );

  // Componente DashboardScreen
  const DashboardScreen = () => {
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
                <h1 className="text-xl font-bold text-white">
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
                  <p className="text-2xl font-bold text-white">
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
                  <p className="text-2xl font-bold text-white">
                    {userData ? userData.points.toLocaleString('pt-BR') : '0'}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Streak: <span className="text-red-400 font-semibold">{userData ? userData.streak : 0} dias</span>
                  </p>
                </div>
                <button 
                  onClick={goToBenefits}
                  className="bg-yellow-600/20 hover:bg-yellow-600/30 border border-yellow-500/30 text-yellow-300 px-3 py-2 rounded-lg text-xs font-medium transition-all hover:scale-105"
                >
                  Usar Pontos
                </button>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <button 
              onClick={goToStake}
              className="group relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-bold py-6 px-12 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center space-x-4">
                <Lock className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-xl">Fazer Stake</span>
                <TrendingUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              
              <p className="text-red-200 text-sm mt-2 opacity-90">
                Deposite seus $SPFC e ganhe recompensas
              </p>
            </button>
            
            <p className="text-gray-500 text-sm mt-4">
              {userData ? `Membro desde ${new Date(userData.joinedDate).toLocaleDateString('pt-BR')}` : ''}
            </p>
          </div>
        </main>
      </div>
    );
  };

  // Componente StakeScreen
  const StakeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-sm border-b border-red-900/20">
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button onClick={goBackFromStake} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <h1 className="text-xl font-bold">Stake SPFC</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Flame className="w-5 h-5 text-red-500" />
            <span className="text-sm font-medium">{userData?.spfcBalance?.toFixed(2)} SPFC</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black/20 backdrop-blur-sm border border-red-900/20 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Lock className="w-4 h-4 text-red-400" />
              <span className="text-sm text-gray-300">Em Stake</span>
            </div>
            <p className="text-xl font-bold text-white">{stakedTokens.toFixed(2)} SPFC</p>
            <p className="text-xs text-green-400">+{totalRewards.toFixed(2)} rewards</p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm border border-red-900/20 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">APY Atual</span>
            </div>
            <p className="text-xl font-bold text-green-400">{calculateAPY(stakePeriod)}%</p>
            <p className="text-xs text-gray-400">variável</p>
          </div>
        </div>

        {/* Stake Form */}
        <div className="bg-black/20 backdrop-blur-sm border border-red-900/20 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <Diamond className="w-5 h-5 text-red-500 mr-2" />
            Fazer Stake
          </h3>
          
          {/* Amount Input */}
          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-2">Quantidade (SPFC)</label>
            <div className="relative">
              <input
                type="number"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-black/30 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
              />
              <button 
                onClick={() => setStakeAmount(userData?.spfcBalance?.toString() || '0')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-400 text-sm font-medium hover:text-red-300"
              >
                MAX
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Disponível: {userData?.spfcBalance?.toFixed(2)} SPFC
            </p>
          </div>

          {/* Period Selection */}
          <div className="mb-6">
            <label className="block text-sm text-gray-300 mb-3">Período de Stake</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { period: '30', days: '30 dias', apy: '12%' },
                { period: '90', days: '90 dias', apy: '18%' },
                { period: '180', days: '6 meses', apy: '25%' },
                { period: '365', days: '1 ano', apy: '35%' }
              ].map((option) => (
                <button
                  key={option.period}
                  onClick={() => setStakePeriod(option.period)}
                  className={`p-3 rounded-lg border transition-all ${
                    stakePeriod === option.period
                      ? 'bg-red-600 border-red-500 text-white'
                      : 'bg-black/30 border-gray-600 text-gray-300 hover:border-red-500'
                  }`}
                >
                  <div className="text-sm font-medium">{option.days}</div>
                  <div className="text-xs opacity-80">{option.apy} APY</div>
                </button>
              ))}
            </div>
          </div>

          {/* Rewards Preview */}
          {stakeAmount && (
            <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Rewards Estimados</span>
                <span className="text-lg font-bold text-green-400">+{calculateRewards()} SPFC</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Baseado em {stakePeriod} dias com APY de {calculateAPY(stakePeriod)}%
              </p>
            </div>
          )}

          {/* Stake Button */}
          <button
            onClick={() => setShowStakeConfirm(true)}
            disabled={!stakeAmount || parseFloat(stakeAmount) <= 0 || parseFloat(stakeAmount) > userData?.spfcBalance}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:from-red-600 hover:to-red-700 transition-all"
          >
            CONFIRMAR STAKE
          </button>
        </div>

        {/* Info Section */}
        <div className="bg-black/20 backdrop-blur-sm border border-red-900/20 rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Info className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Como funciona</span>
          </div>
          <div className="space-y-2 text-xs text-gray-400">
            <p>• Tokens em stake ficam bloqueados pelo período escolhido</p>
            <p>• Rewards são calculados diariamente e pagos ao final</p>
            <p>• Quanto maior o período, maior o APY</p>
            <p>• Resgate antecipado tem penalidade de 10%</p>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showStakeConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 border border-red-900/20 rounded-xl p-6 max-w-sm w-full">
            <div className="text-center mb-6">
              <Shield className="w-12 h-12 text-red-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Confirmar Stake</h3>
              <p className="text-sm text-gray-400">Você está prestes a fazer stake de:</p>
            </div>

            <div className="bg-black/30 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Quantidade:</span>
                <span className="font-bold text-white">{stakeAmount} SPFC</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Período:</span>
                <span className="font-bold text-white">{stakePeriod} dias</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">APY:</span>
                <span className="font-bold text-green-400">{calculateAPY(stakePeriod)}%</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-600 pt-2">
                <span className="text-gray-300">Rewards Estimados:</span>
                <span className="font-bold text-green-400">+{calculateRewards()} SPFC</span>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowStakeConfirm(false)}
                className="flex-1 py-3 px-4 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={executeStake}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-bold hover:from-red-600 hover:to-red-700 transition-all"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stake Loading */}
      {stakeLoading && (
        <LoadingSpinner text="Processando stake..." />
      )}
    </div>
  );

  // Componente BenefitsScreen
  const BenefitsScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-sm border-b border-red-900/20">
        <div className="p-6 flex items-center space-x-3">
          <button onClick={goBackFromBenefits} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          <h1 className="text-xl font-bold">Resgatar Benefícios</h1>
        </div>
      </div>

      <div className="p-6">
        {/* Saldo de Pontos */}
        <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-xl p-6 mb-8 text-center shadow-lg">
          <p className="text-sm font-medium text-white/80 mb-1">Seu Saldo de Pontos</p>
          <div className="flex items-center justify-center space-x-2">
            <Star className="w-8 h-8 text-yellow-300" />
            <p className="text-4xl font-bold text-white">
              {userData?.points.toLocaleString('pt-BR') || '0'}
            </p>
          </div>
          <p className="text-xs text-white/70 mt-2">Use seus pontos para economizar no Morumbi e mais!</p>
        </div>

        {/* Lista de Benefícios */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-300 mb-4">O que você pode fazer com seus pontos:</h2>

          {/* Benefício 1: Sócio Torcedor */}
          <div className="bg-black/20 backdrop-blur-sm border border-red-900/20 rounded-xl p-5 flex items-center justify-between transition-all hover:border-red-500/50">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600/30 p-3 rounded-lg">
                <Users className="w-6 h-6 text-red-300" />
              </div>
              <div>
                <h3 className="font-bold text-white">Sócio Torcedor</h3>
                <p className="text-sm text-gray-400">Pague sua mensalidade com pontos</p>
                <p className="text-xs text-yellow-400 mt-1">500 pts = R$ 25 de desconto</p>
              </div>
            </div>
            <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-red-500 transition-colors">
              Usar Pontos
            </button>
          </div>

          {/* Benefício 2: Ingressos */}
          <div className="bg-black/20 backdrop-blur-sm border border-red-900/20 rounded-xl p-5 flex items-center justify-between transition-all hover:border-red-500/50">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600/30 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-red-300" />
              </div>
              <div>
                <h3 className="font-bold text-white">Comprar Ingressos</h3>
                <p className="text-sm text-gray-400">Descontos ou compra total</p>
                <p className="text-xs text-yellow-400 mt-1">1000 pts = Ingresso Setor Populares</p>
              </div>
            </div>
            <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-red-500 transition-colors">
              Resgatar
            </button>
          </div>

          {/* Benefício 3: Loja Oficial */}
          <div className="bg-black/20 backdrop-blur-sm border border-red-900/20 rounded-xl p-5 flex items-center justify-between transition-all hover:border-red-500/50">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600/30 p-3 rounded-lg">
                <ShoppingBag className="w-6 h-6 text-red-300" />
              </div>
              <div>
                <h3 className="font-bold text-white">Loja SPFC</h3>
                <p className="text-sm text-gray-400">Descontos em produtos oficiais</p>
                <p className="text-xs text-yellow-400 mt-1">300 pts = 15% de desconto</p>
              </div>
            </div>
            <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-red-500 transition-colors">
              Ver Ofertas
            </button>
          </div>

          {/* Benefício 4: Estacionamento */}
          <div className="bg-black/20 backdrop-blur-sm border border-red-900/20 rounded-xl p-5 flex items-center justify-between transition-all hover:border-red-500/50">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600/30 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-red-300" />
              </div>
              <div>
                <h3 className="font-bold text-white">Estacionamento</h3>
                <p className="text-sm text-gray-400">Reserve sua vaga no Morumbi</p>
                <p className="text-xs text-yellow-400 mt-1">200 pts = Vaga reservada</p>
              </div>
            </div>
            <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-red-500 transition-colors">
              Reservar
            </button>
          </div>

          {/* Benefício 5: Experiências VIP */}
          <div className="bg-black/20 backdrop-blur-sm border border-red-900/20 rounded-xl p-5 flex items-center justify-between transition-all hover:border-red-500/50">
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-600/30 p-3 rounded-lg">
                <Crown className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <h3 className="font-bold text-white">Experiências VIP</h3>
                <p className="text-sm text-gray-400">Visitas ao CT, Meet & Greet</p>
                <p className="text-xs text-yellow-400 mt-1">2500 pts = Tour exclusivo CT Barra Funda</p>
              </div>
            </div>
            <button className="bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-yellow-500 transition-colors">
              Participar
            </button>
          </div>

          {/* Benefício 6: Prêmios Especiais */}
          <div className="bg-black/20 backdrop-blur-sm border border-red-900/20 rounded-xl p-5 flex items-center justify-between transition-all hover:border-red-500/50">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-600/30 p-3 rounded-lg">
                <Gift className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <h3 className="font-bold text-white">Prêmios Especiais</h3>
                <p className="text-sm text-gray-400">Camisas autógrafas, bolas oficiais</p>
                <p className="text-xs text-yellow-400 mt-1">5000 pts = Camisa autografada pelo elenco</p>
              </div>
            </div>
            <button className="bg-purple-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-purple-500 transition-colors">
              Participar
            </button>
          </div>
        </div>

        {/* CTA para ganhar mais pontos */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-green-900/30 to-yellow-900/30 border border-green-700/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Quer mais pontos?</h3>
            <p className="text-sm text-gray-300 mb-4">
              Faça stake dos seus tokens SPFC e ganhe pontos automaticamente!
            </p>
            <button 
              onClick={goToStake}
              className="bg-gradient-to-r from-green-600 to-yellow-600 text-white font-bold px-6 py-3 rounded-lg hover:from-green-700 hover:to-yellow-700 transition-all"
            >
              Fazer Stake Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Screen rendering function
  const renderCurrentScreen = () => {
    switch(currentScreen) {
      case 'splash': return <SplashScreen />;
      case 'login': return <LoginScreen />;
      case 'dashboard': return <DashboardScreen />;
      case 'stake': return <StakeScreen />;
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
