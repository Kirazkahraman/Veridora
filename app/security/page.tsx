'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

export default function SecurityPage() {
  const [count, setCount] = useState(0);
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <div className="max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/90 p-10 text-center shadow-xl shadow-slate-950/20">
        <h1 className="text-3xl font-semibold text-white">{t('security')} </h1>
        <p className="mt-4 text-slate-400">{t('security.description')}</p>
        <button
          type="button"
          onClick={() => setCount((value) => value + 1)}
          className="mt-6 rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          {t('clicked')} {count} {t('times')}
        </button>
      </div>
    </main>
  );
}
