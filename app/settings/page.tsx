import Link from 'next/link';

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl p-6">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-black/20 sm:flex-row sm:justify-between sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Ayarlar</p>
            <h1 className="mt-3 text-3xl font-semibold">Hesap ve Sistem Ayarları</h1>
            <p className="mt-2 text-sm text-slate-400">Kullanıcı seçeneklerini ve bildirimi buradan yönetin.</p>
          </div>
          <Link href="/" className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900">
            Ana Sayfaya Dön
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Profil Ayarları</h2>
            <p className="mt-3 text-sm text-slate-400">Kullanıcı bilgilerini ve dil ayarlarını güncelleyin.</p>
            <div className="mt-6 space-y-3 text-sm text-slate-200">
              <div className="rounded-2xl bg-slate-950/80 p-4">Profil bilgilerini düzenle</div>
              <div className="rounded-2xl bg-slate-950/80 p-4">Bildirim tercihlerini yönet</div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Güvenlik</h2>
            <p className="mt-3 text-sm text-slate-400">Erişim izinleri ve oturum açma seçenekleri.</p>
            <div className="mt-6 grid gap-3">
              <button className="rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-400">Şifre Değiştir</button>
              <button className="rounded-2xl border border-slate-700 px-4 py-3 text-sm text-slate-200 hover:border-slate-500">2FA Yönetimi</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
