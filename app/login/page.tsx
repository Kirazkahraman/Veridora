"use client";

import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-slate-100">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Oturum Aç</p>
        <h1 className="mt-3 text-2xl font-semibold">Hizmete devam etmek için giriş yapın</h1>
        <p className="mt-2 text-sm text-slate-400">Email ve parola ile erişimi hızlıca sağlayın.</p>

        <div className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-500"
          />
          <input
            type="password"
            placeholder="Parola"
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-sky-500"
          />
          <button className="w-full rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-400">
            Giriş Yap
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-slate-400">
          Hesabınız yok mu? <Link href="/" className="text-sky-400">Ana Sayfaya Dön</Link>
        </div>
      </div>
    </main>
  );
}
