import Link from 'next/link';

export default function VisitorsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl p-6">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-black/20 sm:flex-row sm:justify-between sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Ziyaretçiler</p>
            <h1 className="mt-3 text-3xl font-semibold">Ziyaretçi Giriş Kontrolü</h1>
            <p className="mt-2 text-sm text-slate-400">Tüm ziyaretçi kartı taleplerini yönetin ve onaylayın.</p>
          </div>
          <Link href="/" className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900">
            Ana Sayfaya Dön
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Aktif Ziyaretçılar</h2>
            <p className="mt-3 text-sm text-slate-400">Sahada olan ziyaretçi kayıtları.</p>
            <div className="mt-6 space-y-3 text-sm text-slate-200">
              <div className="rounded-2xl bg-slate-950/80 p-4">Müşteri Talebi · Kapı Girişi Bekliyor</div>
              <div className="rounded-2xl bg-slate-950/80 p-4">Danışman · Geçici Yetki Verildi</div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Ziyaretçi İşlemleri</h2>
            <p className="mt-3 text-sm text-slate-400">Yeni ziyaretçi onaylama ve kart hazırlama seçenekleri.</p>
            <div className="mt-6 grid gap-3">
              <button className="rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-400">Yeni Ziyaretçi Ekle</button>
              <button className="rounded-2xl border border-slate-700 px-4 py-3 text-sm text-slate-200 hover:border-slate-500">Kart Çıktısı</button>
              <button className="rounded-2xl border border-slate-700 px-4 py-3 text-sm text-slate-200 hover:border-slate-500">Geçmiş Görüntüle</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
