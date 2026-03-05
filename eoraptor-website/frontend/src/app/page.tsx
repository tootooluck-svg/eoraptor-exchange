import {useTranslations} from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const t = useTranslations();
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold">Eoraptor</div>
        <nav className="flex gap-6 items-center">
          <a href="#" className="hover:text-amber-400 transition">{t('nav.home')}</a>
          <a href="#download" className="hover:text-amber-400 transition">{t('nav.download')}</a>
          <LanguageSwitcher />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl">
          {t('hero.subtitle')}
        </p>
        <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg transition transform hover:scale-105">
          {t('hero.cta')}
        </button>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('download.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/docs/whitepaper.pdf" download className="p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition">
              <h3 className="text-xl font-semibold mb-2">{t('download.whitepaper')}</h3>
              <p className="text-slate-400">PDF</p>
            </a>
            <a href="/docs/manual.pdf" download className="p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition">
              <h3 className="text-xl font-semibold mb-2">{t('download.manual')}</h3>
              <p className="text-slate-400">PDF</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400">
        <p>© 2026 Eoraptor Exchange. All rights reserved.</p>
      </footer>
    </main>
  );
}
