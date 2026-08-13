'use client';

import Link from 'next/link';
import { useState } from 'react';

const translations = {
  tr: {
    project: 'PROJE',
    brand: 'VERIDORA',
    subtitle: 'Personel giriş/çıkış ve erişim takibi',
    account: 'Hesap',
    logout: 'Çıkış',
    navigation: 'Menü',
    dashboard: 'Ana Sayfa',
    attendance: 'Giriş/Çıkış',
    access: 'Erişim Onayı',
    visitors: 'Ziyaretçiler',
    reports: 'Raporlar',
    settings: 'Ayarlar',
    language: 'Dil',
    today: 'Bugün',
    activeEmployees: 'Çalışan Sayısı',
    onsiteNow: 'Şu An İçerde',
    lateArrivals: 'Geç Gelen',
    pendingAccess: 'Bekleyen İzin',
    quickActions: 'Hızlı İşlemler',
    checkIn: 'Giriş Kaydı',
    visitorPass: 'Ziyaretçi Kartı',
    approveAccess: 'İzin Onayla',
    exportReport: 'Rapor Dışa Aktar',
    staffActivity: 'Personel Aktivitesi',
    search: 'Ara',
    status: 'Durum',
    role: 'Görev',
    time: 'Saat',
    accessQueue: 'Erişim Kuyruğu',
    reason: 'Sebep',
    pending: 'Bekliyor',
    approved: 'Onaylandı',
    no: 'Hayır',
    yes: 'Evet',
    todaySummary: 'Gün Özeti',
    openGate: 'Kapı Aç',
    secureArea: 'Güvenli Alan',
    entryLog: 'Giriş Kayıtları',
    welcome: 'Hoş geldiniz',
    todayShift: 'Bugünkü vardiya',
    shiftTime: '08:00 - 17:00',
    currentUser: 'İbrahim Demir',
    location: 'Merkez Bina',
  },
  en: {
    project: 'PROJECT',
    brand: 'VERIDORA',
    subtitle: 'Employee entry/exit and access tracking',
    account: 'Account',
    logout: 'Logout',
    navigation: 'Menu',
    dashboard: 'Dashboard',
    attendance: 'Attendance',
    access: 'Access Requests',
    visitors: 'Visitors',
    reports: 'Reports',
    settings: 'Settings',
    language: 'Language',
    today: 'Today',
    activeEmployees: 'Active Employees',
    onsiteNow: 'On Site Now',
    lateArrivals: 'Late Arrivals',
    pendingAccess: 'Pending Access',
    quickActions: 'Quick Actions',
    checkIn: 'Check In',
    visitorPass: 'Visitor Pass',
    approveAccess: 'Approve Access',
    exportReport: 'Export Report',
    staffActivity: 'Staff Activity',
    search: 'Search',
    status: 'Status',
    role: 'Role',
    time: 'Time',
    accessQueue: 'Access Queue',
    reason: 'Reason',
    pending: 'Pending',
    approved: 'Approved',
    no: 'No',
    yes: 'Yes',
    todaySummary: 'Today Summary',
    openGate: 'Open Gate',
    secureArea: 'Secure Area',
    entryLog: 'Entry Log',
    welcome: 'Welcome',
    todayShift: 'Today shift',
    shiftTime: '08:00 - 17:00',
    currentUser: 'Ibrahim Demir',
    location: 'Main Building',
  },
};

export default function HomePage() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = translations[lang];

  const navItems = [
    { label: t.dashboard, icon: '📊', href: '/' },
    { label: t.attendance, icon: '🗓️', href: '/attendance' },
    { label: t.access, icon: '🔐', href: '/access' },
    { label: t.visitors, icon: '👥', href: '/visitors' },
    { label: t.reports, icon: '📈', href: '/reports' },
    { label: t.settings, icon: '⚙️', href: '/settings' },
  ];

  const [activeEmployees, setActiveEmployees] = useState(124);
  const [onsiteNow, setOnsiteNow] = useState(86);
  const [lateArrivals, setLateArrivals] = useState(4);
  const [pendingAccess, setPendingAccess] = useState(7);

  const [activityRows, setActivityRows] = useState([
    { name: 'Ahmet Yılmaz', role: 'Operasyon', status: 'Giriş onaylandı', time: '08:12', badge: 'On site' },
    { name: 'Elif Aras', role: 'Muhasebe', status: 'Çıkış kaydı', time: '17:05', badge: 'Completed' },
    { name: 'Murat Korkmaz', role: 'Teknik', status: 'Geç giriş', time: '08:41', badge: 'Late' },
  ]);

  const [accessQueue, setAccessQueue] = useState([
    { name: 'Deniz Çelik', reason: 'Müşteri ziyareti', state: t.pending },
    { name: 'Seda Kuru', reason: 'Depo erişimi', state: t.approved },
  ]);

  const [showVisitorAlert, setShowVisitorAlert] = useState(false);
  const [showExportAlert, setShowExportAlert] = useState(false);

  const stats = [
    { label: t.activeEmployees, value: activeEmployees.toString(), note: '+8%', tone: 'from-cyan-500 to-sky-500', href: '/attendance' },
    { label: t.onsiteNow, value: onsiteNow.toString(), note: 'On site', tone: 'from-emerald-500 to-green-500', href: '/access' },
    { label: t.lateArrivals, value: lateArrivals.toString(), note: 'Today', tone: 'from-amber-500 to-yellow-500', href: '/attendance' },
    { label: t.pendingAccess, value: pendingAccess.toString(), note: 'Awaiting review', tone: 'from-fuchsia-500 to-purple-500', href: '/access' },
  ];

  const handleCheckIn = () => {
    const timestamp = new Date();
    const newEntry = {
      name: 'Yeni Çalışan',
      role: 'Üretim',
      status: 'Giriş kaydı',
      time: `${timestamp.getHours().toString().padStart(2, '0')}:${timestamp.getMinutes().toString().padStart(2, '0')}`,
      badge: 'On site',
    };
    setActivityRows([newEntry, ...activityRows]);
    setActiveEmployees(activeEmployees + 1);
    setOnsiteNow(onsiteNow + 1);
  };

  const handleVisitorPass = () => {
    if (!accessQueue.some((item) => item.name === 'Ziyaretçi')) {
      setAccessQueue([{ name: 'Ziyaretçi', reason: 'Geçici ziyaret', state: t.pending }, ...accessQueue]);
    }
    setShowVisitorAlert(true);
    setTimeout(() => setShowVisitorAlert(false), 3000);
  };

  const handleApproveAccess = () => {
    const nextPending = accessQueue.findIndex((item) => item.state === t.pending);
    if (nextPending !== -1) {
      const updatedQueue = [...accessQueue];
      updatedQueue[nextPending] = { ...updatedQueue[nextPending], state: t.approved };
      setAccessQueue(updatedQueue);
      setPendingAccess(Math.max(0, pendingAccess - 1));
      setShowExportAlert(false);
      return;
    }
    setShowVisitorAlert(false);
  };

  const handleExportReport = () => {
    setShowExportAlert(true);
    setTimeout(() => setShowExportAlert(false), 3000);
  };

  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100">
      <div className="grid min-h-screen grid-cols-[280px_1fr]">
        <aside className="border-r border-slate-800 bg-slate-950/95 p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-400">V</div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">{t.project}</p>
              <h1 className="text-xl font-semibold text-white">{t.brand}</h1>
              <p className="text-sm text-slate-400">{t.subtitle}</p>
            </div>
          </div>


          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-slate-500">{t.navigation}</p>
            <nav className="space-y-2 text-sm">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${item.href === '/' ? 'bg-sky-500/10 text-sky-300' : 'text-slate-300 hover:bg-slate-900/80'}`}>
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        <section className="bg-[#0f172a] p-6 lg:p-8">
          <header className="mb-6 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-950/90 p-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm text-slate-400">{t.welcome}, {t.currentUser}</p>
              <h2 className="mt-1 text-2xl font-semibold text-white">{t.today} · {t.location}</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-300">
                <span>{t.todayShift}</span>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-300">{t.shiftTime}</span>
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangMenuOpen((open) => !open)}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/80 text-lg text-slate-200 hover:bg-slate-900"
                >
                  {lang === 'tr' ? '🇹🇷' : '🇺🇸'}
                </button>
                {langMenuOpen && (
                  <div className="absolute right-0 z-20 mt-2 w-40 rounded-3xl border border-slate-800 bg-slate-950/95 p-2 shadow-xl shadow-black/30">
                    <button
                      type="button"
                      onClick={() => {
                        setLang('tr');
                        setLangMenuOpen(false);
                      }}
                      className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm text-slate-100 hover:bg-slate-900"
                    >
                      <span>🇹🇷</span>
                      Türkçe
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLang('en');
                        setLangMenuOpen(false);
                      }}
                      className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm text-slate-100 hover:bg-slate-900"
                    >
                      <span>🇺🇸</span>
                      English
                    </button>
                  </div>
                )}
              </div>
              <Link href="/login" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-300 hover:bg-slate-900 text-center">
                {t.account}
              </Link>
              <Link href="/login" className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-300 hover:bg-slate-900 text-center">
                {t.logout}
              </Link>
            </div>
          </header>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`group rounded-3xl bg-gradient-to-br ${item.tone} p-5 text-white shadow-lg transition duration-200 hover:scale-[1.01] hover:shadow-2xl`}
              >
                <p className="text-3xl font-semibold">{item.value}</p>
                <p className="mt-2 text-sm opacity-90">{item.label}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] opacity-80">{item.note}</p>
              </Link>
            ))}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.7fr_1fr]">
            <article className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{t.staffActivity}</h3>
                  <p className="text-sm text-slate-400">{t.entryLog}</p>
                </div>
                <Link href="/reports" className="rounded-2xl border border-slate-700 px-3 py-2 text-sm text-slate-300 hover:bg-slate-900/80">{t.search}</Link>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-800">
                <table className="min-w-full text-sm text-slate-300">
                  <thead className="bg-slate-900/80 text-left text-slate-400">
                    <tr>
                      <th className="px-4 py-3">{t.role}</th>
                      <th className="px-4 py-3">{t.status}</th>
                      <th className="px-4 py-3">{t.time}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activityRows.map((row) => (
                      <tr key={row.name} className="border-t border-slate-800">
                        <td className="px-4 py-3">
                          <div className="font-medium text-white">{row.name}</div>
                          <div className="text-xs text-slate-500">{row.role}</div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-200">{row.status}</span>
                        </td>
                        <td className="px-4 py-3">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <div className="space-y-4">
              <article className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
                <h3 className="text-lg font-semibold text-white">{t.quickActions}</h3>
                <div className="mt-4 space-y-3">
                  <button
                    onClick={handleCheckIn}
                    className="w-full rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                  >
                    {t.checkIn}
                  </button>
                  <button
                    onClick={handleVisitorPass}
                    className="w-full rounded-2xl border border-slate-700 px-4 py-3 text-sm text-slate-300 transition hover:border-slate-600 hover:text-white"
                  >
                    {t.visitorPass}
                  </button>
                  <button
                    onClick={handleApproveAccess}
                    className="w-full rounded-2xl border border-slate-700 px-4 py-3 text-sm text-slate-300 transition hover:border-slate-600 hover:text-white"
                  >
                    {t.approveAccess}
                  </button>
                  <button
                    onClick={handleExportReport}
                    className="w-full rounded-2xl border border-slate-700 px-4 py-3 text-sm text-slate-300 transition hover:border-slate-600 hover:text-white"
                  >
                    {t.exportReport}
                  </button>
                </div>
                {showVisitorAlert && (
                  <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                    Ziyaretçi kaydı kuyruğa eklendi.
                  </div>
                )}
                {showExportAlert && (
                  <div className="mt-4 rounded-2xl border border-sky-500/30 bg-sky-500/10 px-4 py-3 text-sm text-sky-200">
                    Rapor başarıyla dışa aktarılıyor...
                  </div>
                )}
              </article>

              <article className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{t.accessQueue}</h3>
                  <span className="text-sm text-slate-400">{t.todaySummary}</span>
                </div>
                <div className="mt-4 space-y-3">
                  {accessQueue.map((item) => (
                    <div key={item.name} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-white">{item.name}</p>
                          <p className="text-sm text-slate-400">{item.reason}</p>
                        </div>
                        <span className={`rounded-full px-2.5 py-1 text-xs ${item.state === t.pending ? 'bg-amber-500/15 text-amber-300' : 'bg-emerald-500/15 text-emerald-300'}`}>
                          {item.state}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
