'use client';

import { useState } from 'react';

const languages = [
  { code: 'zh-CN', name: '中文简体' },
  { code: 'zh-TW', name: '中文繁體' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'fr', name: 'Français' },
];

const translations = {
  'zh-CN': {
    nav: { features: '功能特性', security: '安全保障', markets: '市场行情', download: '下载APP' },
    hero: {
      title: 'Eoraptor 交易所',
      subtitle: '面向全球用户的高性能数字资产交易平台',
      description: '安全、快速、专业的加密货币交易服务，支持多种数字资产交易对',
      cta: '立即开始',
      secondary: '了解更多'
    },
    features: {
      title: '核心优势',
      items: [
        { title: '极速交易', desc: '百万级TPS，毫秒级成交' },
        { title: '安全保障', desc: '多重签名冷钱包存储' },
        { title: '深度流动性', desc: '全球顶级做市商支持' },
        { title: '全平台覆盖', desc: 'iOS、Android、Web端' }
      ]
    },
    markets: {
      title: '热门交易对',
      pairs: ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'XRP/USDT']
    },
    security: {
      title: '安全保障',
      items: ['冷钱包存储', '多重签名', 'SSL加密', '风控系统']
    },
    download: {
      title: '下载 Eoraptor APP',
      subtitle: '随时随地，掌控交易'
    },
    footer: {
      risk: '投资有风险，参与需谨慎',
      rights: '© 2026 Eoraptor. All rights reserved.'
    }
  },
  'zh-TW': {
    nav: { features: '功能特性', security: '安全保障', markets: '市場行情', download: '下載APP' },
    hero: {
      title: 'Eoraptor 交易所',
      subtitle: '面向全球用戶的高性能數字資產交易平台',
      description: '安全、快速、專業的加密貨幣交易服務，支持多種數字資產交易對',
      cta: '立即開始',
      secondary: '了解更多'
    },
    features: {
      title: '核心優勢',
      items: [
        { title: '極速交易', desc: '百萬級TPS，毫秒級成交' },
        { title: '安全保障', desc: '多重簽名冷錢包存儲' },
        { title: '深度流動性', desc: '全球頂級做市商支持' },
        { title: '全平台覆蓋', desc: 'iOS、Android、Web端' }
      ]
    },
    markets: {
      title: '熱門交易對',
      pairs: ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'XRP/USDT']
    },
    security: {
      title: '安全保障',
      items: ['冷錢包存儲', '多重簽名', 'SSL加密', '風控系統']
    },
    download: {
      title: '下載 Eoraptor APP',
      subtitle: '隨時隨地，掌控交易'
    },
    footer: {
      risk: '投資有風險，參與需謹慎',
      rights: '© 2026 Eoraptor. All rights reserved.'
    }
  },
  'en': {
    nav: { features: 'Features', security: 'Security', markets: 'Markets', download: 'Download' },
    hero: {
      title: 'Eoraptor Exchange',
      subtitle: 'High-Performance Digital Asset Trading Platform for Global Users',
      description: 'Secure, fast, and professional cryptocurrency trading services supporting multiple digital asset pairs',
      cta: 'Get Started',
      secondary: 'Learn More'
    },
    features: {
      title: 'Core Advantages',
      items: [
        { title: 'Lightning Fast', desc: 'Millions TPS, millisecond execution' },
        { title: 'Secure Storage', desc: 'Multi-sig cold wallet storage' },
        { title: 'Deep Liquidity', desc: 'Supported by top global market makers' },
        { title: 'Full Platform', desc: 'iOS, Android, Web' }
      ]
    },
    markets: {
      title: 'Hot Trading Pairs',
      pairs: ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'XRP/USDT']
    },
    security: {
      title: 'Security',
      items: ['Cold Wallet', 'Multi-Signature', 'SSL Encryption', 'Risk Control']
    },
    download: {
      title: 'Download Eoraptor APP',
      subtitle: 'Trade anytime, anywhere'
    },
    footer: {
      risk: 'Investment involves risks, please participate with caution',
      rights: '© 2026 Eoraptor. All rights reserved.'
    }
  },
  'es': {
    nav: { features: 'Características', security: 'Seguridad', markets: 'Mercados', download: 'Descargar' },
    hero: {
      title: 'Exchange Eoraptor',
      subtitle: 'Plataforma de Trading de Activos Digitales de Alto Rendimiento',
      description: 'Servicios seguros, rápidos y profesionales de trading de criptomonedas',
      cta: 'Comenzar',
      secondary: 'Saber Más'
    },
    features: {
      title: 'Ventajas Principales',
      items: [
        { title: 'Ultra Rápido', desc: 'Millones de TPS, ejecución en milisegundos' },
        { title: 'Almacenamiento Seguro', desc: 'Billetera fría con múltiples firmas' },
        { title: 'Alta Liquidez', desc: 'Soportado por los mejores market makers' },
        { title: 'Todas las Plataformas', desc: 'iOS, Android, Web' }
      ]
    },
    markets: {
      title: 'Pares Populares',
      pairs: ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'XRP/USDT']
    },
    security: {
      title: 'Seguridad',
      items: ['Billetera Fría', 'Múltiples Firmas', 'Encriptación SSL', 'Control de Riesgo']
    },
    download: {
      title: 'Descargar APP Eoraptor',
      subtitle: 'Opere en cualquier momento y lugar'
    },
    footer: {
      risk: 'La inversión conlleva riesgos, participe con precaución',
      rights: '© 2026 Eoraptor. Todos los derechos reservados.'
    }
  },
  'ja': {
    nav: { features: '機能', security: 'セキュリティ', markets: '市場', download: 'ダウンロード' },
    hero: {
      title: 'Eoraptor 取引所',
      subtitle: 'グローバルユーザー向け高性能デジタル資産取引プラットフォーム',
      description: '安全で高速、プロフェッショナルな暗号通貨取引サービス',
      cta: '始める',
      secondary: '詳細を見る'
    },
    features: {
      title: 'コアアドバンテージ',
      items: [
        { title: '超高速取引', desc: '数百万TPS、ミリ秒実行' },
        { title: '安全な保管', desc: 'マルチシグコールドウォレット' },
        { title: '深い流動性', desc: '世界トップのマーケットメーカー' },
        { title: '全プラットフォーム', desc: 'iOS、Android、Web' }
      ]
    },
    markets: {
      title: '人気取引ペア',
      pairs: ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'XRP/USDT']
    },
    security: {
      title: 'セキュリティ',
      items: ['コールドウォレット', 'マルチシグ', 'SSL暗号化', 'リスク管理']
    },
    download: {
      title: 'Eoraptor APPをダウンロード',
      subtitle: 'いつでもどこでも取引'
    },
    footer: {
      risk: '投資にはリスクが伴います。慎重にご参加ください',
      rights: '© 2026 Eoraptor. All rights reserved.'
    }
  },
  'ko': {
    nav: { features: '기능', security: '보안', markets: '시장', download: '다운로드' },
    hero: {
      title: 'Eoraptor 거래소',
      subtitle: '글로벌 사용자를 위한 고성능 디지털 자산 거래 플랫폼',
      description: '안전하고 빠른 전문 암호화폐 거래 서비스',
      cta: '시작하기',
      secondary: '더 알아보기'
    },
    features: {
      title: '핵심 강점',
      items: [
        { title: '초고속 거래', desc: '수백만 TPS, 밀리초 체결' },
        { title: '안전한 보관', desc: '다중 서명 콜드월렛' },
        { title: '깊은 유동성', desc: '글로벌 최고 마켓 메이커' },
        { title: '전 플랫폼', desc: 'iOS, Android, Web' }
      ]
    },
    markets: {
      title: '인기 거래 페어',
      pairs: ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'XRP/USDT']
    },
    security: {
      title: '보안',
      items: ['콜드월렛', '다중 서명', 'SSL 암호화', '리스크 관리']
    },
    download: {
      title: 'Eoraptor APP 다운로드',
      subtitle: '언제 어디서나 거래'
    },
    footer: {
      risk: '투자에는 위험이 따릅니다. 신중하게 참여하세요',
      rights: '© 2026 Eoraptor. All rights reserved.'
    }
  },
  'fr': {
    nav: { features: 'Fonctionnalités', security: 'Sécurité', markets: 'Marchés', download: 'Télécharger' },
    hero: {
      title: 'Exchange Eoraptor',
      subtitle: 'Plateforme de Trading d\'Actifs Numériques Haute Performance',
      description: 'Services de trading de cryptomonnaies sécurisés, rapides et professionnels',
      cta: 'Commencer',
      secondary: 'En Savoir Plus'
    },
    features: {
      title: 'Avantages Clés',
      items: [
        { title: 'Ultra Rapide', desc: 'Millions de TPS, exécution en millisecondes' },
        { title: 'Stockage Sécurisé', desc: 'Portefeuille froid multi-signatures' },
        { title: 'Haute Liquidité', desc: 'Soutenu par les meilleurs market makers' },
        { title: 'Toutes Plateformes', desc: 'iOS, Android, Web' }
      ]
    },
    markets: {
      title: 'Paires Populaires',
      pairs: ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'XRP/USDT']
    },
    security: {
      title: 'Sécurité',
      items: ['Portefeuille Froid', 'Multi-Signatures', 'Chiffrement SSL', 'Contrôle des Risques']
    },
    download: {
      title: 'Télécharger APP Eoraptor',
      subtitle: 'Tradez n\'importe quand, n\'importe où'
    },
    footer: {
      risk: 'L\'investissement comporte des risques, veuillez participer avec prudence',
      rights: '© 2026 Eoraptor. Tous droits réservés.'
    }
  }
};

export default function Home() {
  const [currentLang, setCurrentLang] = useState('zh-CN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = translations[currentLang as keyof typeof translations];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1a] via-[#0f2a1f] to-[#0a0f1a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#00e19b]">Eoraptor</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-[#00e19b] transition">{t.nav.features}</a>
              <a href="#security" className="text-gray-300 hover:text-[#00e19b] transition">{t.nav.security}</a>
              <a href="#markets" className="text-gray-300 hover:text-[#00e19b] transition">{t.nav.markets}</a>
              <a href="#download" className="text-gray-300 hover:text-[#00e19b] transition">{t.nav.download}</a>
            </div>

            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center space-x-1 text-gray-300 hover:text-[#00e19b] transition px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  <span className="text-lg">🌐</span>
                  <span className="text-sm">{languages.find(l => l.code === currentLang)?.name}</span>
                  <span>▼</span>
                </button>
                
                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-[#0a0f1a]/90 backdrop-blur-md rounded-lg shadow-xl border border-white/10">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition first:rounded-t-lg last:rounded-b-lg ${
                          currentLang === lang.code ? 'text-[#00e19b]' : 'text-gray-300'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="md:hidden text-gray-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <span className="text-2xl">✕</span> : <span className="text-2xl">☰</span>}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f1a]/90 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-300 hover:text-[#00e19b]">{t.nav.features}</a>
              <a href="#security" className="block text-gray-300 hover:text-[#00e19b]">{t.nav.security}</a>
              <a href="#markets" className="block text-gray-300 hover:text-[#00e19b]">{t.nav.markets}</a>
              <a href="#download" className="block text-gray-300 hover:text-[#00e19b]">{t.nav.download}</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00e19b]/20 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00e19b] to-[#00b47c] bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#00e19b]/80 mb-4">{t.hero.subtitle}</p>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">{t.hero.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#00e19b] hover:bg-[#00b47c] text-[#0a0f1a] font-semibold rounded-full transition transform hover:scale-105">
                {t.hero.cta}
              </button>
              <button className="px-8 py-4 border border-[#00e19b] text-[#00e19b] hover:bg-[#00e19b]/10 rounded-full transition">
                {t.hero.secondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#00e19b]">{t.features.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.items.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#00e19b]/50 transition">
                <div className="w-12 h-12 bg-[#00e19b]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section id="markets" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#00e19b]">{t.markets.title}</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
              {t.markets.pairs.map((pair, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
                  <div className="text-lg font-semibold text-white mb-1">{pair}</div>
                  <div className="text-[#00e19b]">+{(Math.random() * 10 + 1).toFixed(2)}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#00e19b]">{t.security.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.security.items.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00e19b]/20 flex items-center justify-center">
                  <span className="text-3xl">🛡️</span>
                </div>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00e19b]">{t.download.title}</h2>
          <p className="text-gray-400 mb-8">{t.download.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#0a0f1a] font-semibold rounded-xl hover:bg-gray-100 transition flex items-center justify-center gap-2">
              <span>📱</span>
              App Store
            </button>
            <button className="px-8 py-4 bg-white text-[#0a0f1a] font-semibold rounded-xl hover:bg-gray-100 transition flex items-center justify-center gap-2">
              <span>📱</span>
              Google Play
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#00e19b] mb-2">{t.footer.risk}</p>
          <p className="text-gray-500 text-sm">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}