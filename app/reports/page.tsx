import Link from 'next/link';

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl p-6">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-black/20 sm:flex-row sm:justify-between sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Raporlar</p>
            <h1 className="mt-3 text-3xl font-semibold">Personel ve Güvenlik Raporları</h1>
            <p className="mt-2 text-sm text-slate-400">Tüm haftalık ve aylık raporları buradan indirin.</p>
          </div>
          <Link href="/" className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900">
            Ana Sayfaya Dön
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {['Günlük Hareket', 'Haftalık Özet', 'Aylık Erişim'].map((title) => (
            <div key={title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm text-slate-400">Bu raporu indir veya PDF olarak görüntüle.</p>
              <button className="mt-6 rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-400">İndir</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
