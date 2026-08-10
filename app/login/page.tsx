"use client";

import Link from 'next/link';
import AuthPanel from '@/components/AuthPanel';
import { useI18n } from '@/lib/i18n';

export default function LoginPage() {
  const { t } = useI18n();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-slate-100">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">{t('login.title')}</p>
        <h1 className="mt-3 text-2xl font-semibold">{t('login.subtitle')}</h1>
        <p className="mt-2 text-sm text-slate-400">{t('login.description')}</p>

        <div className="mt-8">
          <AuthPanel />
        </div>

        <div className="mt-6 text-center text-sm text-slate-400">
          {t('login.noAccount')} <Link href="/" className="text-sky-400">{t('home')}</Link>
        </div>
      </div>
    </main>
  );
}
