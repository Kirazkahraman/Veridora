import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/90 p-10 text-center shadow-2xl shadow-black/30">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">404 | Sayfa Bulunamadı</p>
        <h1 className="mt-4 text-4xl font-semibold">Üzgünüz, bu sayfaya ulaşılamıyor.</h1>
        <p className="mt-4 text-sm text-slate-400">Girdiğiniz bağlantı mevcut değil ya da taşınmış olabilir.</p>
        <Link href="/" className="mt-8 inline-block rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  );
}
