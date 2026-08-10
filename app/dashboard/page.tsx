import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

const stats = [
  { label: 'stats.today', value: '124' },
  { label: 'stats.active', value: '86' },
  { label: 'stats.incidents', value: '2' },
];

export default function DashboardPage() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">{t('dashboard.title')}</p>
            <h1 className="mt-2 text-3xl font-semibold">{t('dashboard.header')}</h1>
          </div>
          <Link href="/" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            {t('home')}
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-sm text-slate-400">{t(item.label)}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold">{t('daily.flow')}</h2>
            <p className="mt-2 text-sm text-slate-400">{t('daily.description')}</p>
            <div className="mt-6 space-y-3">
              {['08:10 - Ahmet Y. giriş onaylandı', '09:45 - Zeynep K. geçici erişim talebi', '11:20 - Güvenlik uyarısı: beklenmeyen hareket'].map((entry) => (
                <div key={entry} className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-sm text-slate-300">
                  {entry}
                </div>
              ))}
            </div>
          </section>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold">{t('quick.actions')}</h2>
            <div className="mt-4 space-y-3">
              <button className="w-full rounded-xl bg-sky-500 px-4 py-3 text-sm font-medium text-white">{t('quick.grant')}</button>
              <button className="w-full rounded-xl border border-slate-700 px-4 py-3 text-sm font-medium text-slate-300">{t('quick.report')}</button>
              <button className="w-full rounded-xl border border-slate-700 px-4 py-3 text-sm font-medium text-slate-300">{t('quick.schedule')}</button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
