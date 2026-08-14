'use client';

import Link from 'next/link';

export default function AccessPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="mx-auto max-w-6xl">
        {/* Üst Başlık */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">
              ERİŞİM YÖNETİMİ
            </p>
            <h1 className="mt-1 text-3xl font-bold">Bekleyen Onaylar</h1>
            <p className="mt-1 text-sm text-slate-400">
              Gelen erişim taleplerini ve yetkileri buradan yönetin.
            </p>
          </div>
          {/* Ana Sayfaya Dön Butonu */}
          <Link
            href="/dashboard"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm rounded-xl border border-slate-700 transition"
          >
            Ana Sayfaya Dön
          </Link>
        </div>

        {/* Liste Alanı */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 text-center text-slate-400">
          Bekleyen erişim talebi bulunmamaktadır.
        </div>
      </div>
    </main>
  );
}