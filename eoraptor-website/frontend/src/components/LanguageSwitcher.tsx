'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.push(`/${newLocale}${pathname.replace(`/${locale}`, '') || ''}`);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLocale('zh')}
        className={`px-3 py-1 rounded text-sm transition ${
          locale === 'zh' ? 'bg-amber-500 text-slate-900' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
        }`}
      >
        中文
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 rounded text-sm transition ${
          locale === 'en' ? 'bg-amber-500 text-slate-900' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
        }`}
      >
        EN
      </button>
    </div>
  );
}
