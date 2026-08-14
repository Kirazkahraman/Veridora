'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  // Dil Durumu (TR / EN)
  const [lang, setLang] = useState<'TR' | 'EN'>('TR');
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Sayfa Metinleri
  const t = {
    TR: {
      project: 'PROJE',
      subTitle: 'Personel giriş/çıkış ve erişim takibi',
      menu: 'MENÜ',
      home: '📊 Ana Sayfa',
      attendance: '📅 Giriş/Çıkış',
      access: '🔐 Erişim Onayı',
      visitors: '👥 Ziyaretçiler',
      reports: '📈 Raporlar',
      settings: '⚙️ Ayarlar',
      welcome: 'Hoş geldiniz,',
      user: 'İbrahim Demir',
      building: 'Bugün · Merkez Bina',
      shift: 'Bugünkü vardiya',
      account: 'Hesap',
      logout: 'Çıkış',
      employeeCount: 'Çalışan Sayısı',
      onSite: 'Şu An İçerde',
      late: 'Geç Gelen',
      awaitingReview: 'Bekleyen İzin',
      activityTitle: 'Personel Aktivitesi',
      activitySub: 'Giriş Kayıtları',
      search: 'Ara',
      approved: 'Giriş onaylandı',
      checkOut: 'Çıkış kaydı',
      quickActions: 'Hızlı İşlemler',
      checkInBtn: 'Giriş Kaydı',
      visitorCardBtn: 'Ziyaretçi Kartı',
      approveLeaveBtn: 'İzin Onayla',
    },
    EN: {
      project: 'PROJECT',
      subTitle: 'Personnel entry/exit & access tracking',
      menu: 'MENU',
      home: '📊 Dashboard',
      attendance: '📅 Entry/Exit',
      access: '🔐 Access Approval',
      visitors: '👥 Visitors',
      reports: '📈 Reports',
      settings: '⚙️ Settings',
      welcome: 'Welcome,',
      user: 'İbrahim Demir',
      building: 'Today · Main Building',
      shift: 'Today\'s shift',
      account: 'Account',
      logout: 'Logout',
      employeeCount: 'Employee Count',
      onSite: 'On Site',
      late: 'Late Arrivals',
      awaitingReview: 'Pending Leave',
      activityTitle: 'Personnel Activity',
      activitySub: 'Entry Logs',
      search: 'Search',
      approved: 'Entry Approved',
      checkOut: 'Check-out Log',
      quickActions: 'Quick Actions',
      checkInBtn: 'New Check-In',
      visitorCardBtn: 'Visitor Pass',
      approveLeaveBtn: 'Approve Leave',
    },
  }[lang];

  return (
    <div className="flex min-h-screen bg-[#0b0f19] text-slate-100 font-sans">
      {/* Sol Menü / Sidebar */}
      <aside className="w-64 border-r border-slate-800/80 bg-[#0d121f] p-6 flex flex-col justify-between hidden md:flex">
        <div className="space-y-8">
          <div>
            <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">{t.project}</p>
            <h1 className="text-xl font-black text-sky-400">VERİDORA</h1>
            <p className="text-xs text-slate-400 mt-0.5">{t.subTitle}</p>
          </div>

          <nav className="space-y-2 text-sm font-medium">
            <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-3">{t.menu}</p>
            <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-sky-500/10 text-sky-400 font-semibold border border-sky-500/20">
              {t.home}
            </Link>
            <Link href="/attendance" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition">
              {t.attendance}
            </Link>
            <Link href="/access" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition">
              {t.access}
            </Link>
            <Link href="/visitors" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition">
              {t.visitors}
            </Link>
            <Link href="/reports" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition">
              {t.reports}
            </Link>
            <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition">
              {t.settings}
            </Link>
          </nav>
        </div>
      </aside>

      {/* Ana İçerik Alanı */}
      <main className="flex-1 p-6 md:p-8 space-y-6">
        {/* Üst Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#111726]/60 border border-slate-800 p-5 rounded-2xl">
          <div>
            <p className="text-xs text-slate-400">{t.welcome} <span className="text-white font-medium">{t.user}</span></p>
            <h2 className="text-2xl font-bold text-white mt-0.5">{t.building}</h2>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-300">
              {t.shift} <strong className="text-emerald-400 font-semibold ml-1">08:00 - 17:00</strong>
            </span>

            {/* Dil Seçeneği Butonu (Tıklanabilir TR / EN Açılır Menü) */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)} 
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 flex items-center gap-1 font-semibold transition cursor-pointer"
              >
                {lang} ▾
              </button>

              {/* Açılır Dil Listesi */}
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-[#111726] border border-slate-700 rounded-xl shadow-xl overflow-hidden z-50">
                  <button
                    onClick={() => { setLang('TR'); setIsLangOpen(false); }}
                    className={`w-full px-4 py-2 text-left text-xs font-semibold hover:bg-slate-800 transition ${lang === 'TR' ? 'text-sky-400 bg-slate-800/50' : 'text-slate-300'}`}
                  >
                    🇹🇷 TR
                  </button>
                  <button
                    onClick={() => { setLang('EN'); setIsLangOpen(false); }}
                    className={`w-full px-4 py-2 text-left text-xs font-semibold hover:bg-slate-800 transition ${lang === 'EN' ? 'text-sky-400 bg-slate-800/50' : 'text-slate-300'}`}
                  >
                    🇬🇧 EN
                  </button>
                </div>
              )}
            </div>

            <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700">{t.account}</button>
            <button className="px-3 py-1.5 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 rounded-xl border border-rose-500/20">{t.logout}</button>
          </div>
        </div>

        {/* Renkli 4 Kart (Tıklanabilir Butonlar) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/attendance" className="p-5 rounded-2xl bg-[#00a8ff] text-slate-950 shadow-lg cursor-pointer block hover:opacity-90 transition">
            <p className="text-3xl font-black">124</p>
            <p className="text-xs font-bold mt-1 opacity-90">{t.employeeCount}</p>
            <p className="text-[10px] mt-3 font-semibold opacity-75">+8%</p>
          </Link>

          <Link href="/attendance" className="p-5 rounded-2xl bg-[#00d26a] text-slate-950 shadow-lg cursor-pointer block hover:opacity-90 transition">
            <p className="text-3xl font-black">86</p>
            <p className="text-xs font-bold mt-1 opacity-90">{t.onSite}</p>
            <p className="text-[10px] mt-3 font-semibold uppercase tracking-wider opacity-75">ON SITE</p>
          </Link>

          <Link href="/attendance" className="p-5 rounded-2xl bg-[#ff9f00] text-slate-950 shadow-lg cursor-pointer block hover:opacity-90 transition">
            <p className="text-3xl font-black">4</p>
            <p className="text-xs font-bold mt-1 opacity-90">{t.late}</p>
            <p className="text-[10px] mt-3 font-semibold uppercase tracking-wider opacity-75">TODAY</p>
          </Link>

          <Link href="/access" className="p-5 rounded-2xl bg-[#9b51e0] text-slate-950 shadow-lg cursor-pointer block hover:opacity-90 transition">
            <p className="text-3xl font-black">7</p>
            <p className="text-xs font-bold mt-1 opacity-90">{t.awaitingReview}</p>
            <p className="text-[10px] mt-3 font-semibold uppercase tracking-wider opacity-75">AWAITING REVIEW</p>
          </Link>
        </div>

        {/* Alt İçerikler */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#111726]/60 border border-slate-800 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-bold text-white">{t.activityTitle}</h3>
                <p className="text-xs text-slate-400">{t.activitySub}</p>
              </div>
              <button className="px-3 py-1 bg-slate-800 text-xs text-slate-300 rounded-lg border border-slate-700">{t.search}</button>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-xl border border-slate-800/60">
                <div>
                  <p className="font-semibold text-white">Ahmet Yılmaz</p>
                  <p className="text-xs text-slate-400">Operasyon</p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs">{t.approved}</span>
                <span className="text-xs text-slate-400">08:12</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-xl border border-slate-800/60">
                <div>
                  <p className="font-semibold text-white">Elif Aras</p>
                  <p className="text-xs text-slate-400">Muhasebe</p>
                </div>
                <span className="px-2.5 py-1 bg-slate-800 text-slate-300 border border-slate-700 rounded-lg text-xs">{t.checkOut}</span>
                <span className="text-xs text-slate-400">17:05</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111726]/60 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h3 className="font-bold text-white mb-2">{t.quickActions}</h3>
            <Link href="/attendance" className="block w-full py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition text-center">{t.checkInBtn}</Link>
            <Link href="/visitors" className="block w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-xl border border-slate-700 transition text-center">{t.visitorCardBtn}</Link>
            <Link href="/access" className="block w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-xl border border-slate-700 transition text-center">{t.approveLeaveBtn}</Link>
          </div>
        </div>
      </main>
    </div>
  );
}