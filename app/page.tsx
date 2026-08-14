'use client';

import { useState } from 'react';

export default function HomePage() {
  // Örnek istek verileri
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: 'Merve Demir',
      role: 'Yazılım Geliştirici',
      zone: 'Ana Bina (B Blok Giriş)',
      time: 'Bugün, 09:45 AM',
      initials: 'M',
    },
    {
      id: 2,
      name: 'Caner Şahin',
      role: 'Sistem Yöneticisi',
      zone: 'Sunucu Odası (D Blok)',
      time: 'Bugün, 09:20 AM',
      initials: 'C',
    },
    {
      id: 3,
      name: 'Selin Yılmaz',
      role: 'İnsan Kaynakları',
      zone: 'VIP Salonu (A Blok)',
      time: 'Dün, 16:15 PM',
      initials: 'S',
    },
  ]);

  const [approvedCount, setApprovedCount] = useState(42);
  const [deniedCount, setDeniedCount] = useState(3);

  // Onayla / Reddet İşlemleri
  const handleApprove = (id: number) => {
    setRequests(requests.filter((r) => r.id !== id));
    setApprovedCount((prev) => prev + 1);
  };

  const handleDeny = (id: number) => {
    setRequests(requests.filter((r) => r.id !== id));
    setDeniedCount((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen bg-[#0b0f17] text-slate-100 p-6 md:p-10 font-sans">
      <div className="mx-auto max-w-7xl space-y-6">
        
        {/* Üst Başlık Alanı */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 rounded-2xl border border-slate-800 bg-[#111726]/80 p-6 backdrop-blur">
          <div>
            <p className="text-xs font-bold tracking-widest text-sky-400 uppercase">
              VERİDORA AI GÜVENLİK YÖNETİMİ
            </p>
            <h1 className="mt-1 text-2xl md:text-3xl font-extrabold text-white">
              Erişim Yönetimi: Bekleyen Personel Giriş İstekleri
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Bekleyen personel erişim isteklerini inceleyin ve hızlıca onaylayın veya reddedin.
            </p>
          </div>
        </div>

        {/* 4'lü Sayaç Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#111726]/80 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl font-bold text-xl">⏳</div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Bekleyen İstekler</p>
              <p className="text-2xl font-bold text-amber-400 mt-0.5">{requests.length}</p>
              <p className="text-[11px] text-slate-500">İşlem Bekleyen İstekler</p>
            </div>
          </div>

          <div className="bg-[#111726]/80 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl font-bold text-xl">✓</div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Bugünkü Onaylar</p>
              <p className="text-2xl font-bold text-emerald-400 mt-0.5">{approvedCount}</p>
              <p className="text-[11px] text-slate-500">Tamamlanan İstekler</p>
            </div>
          </div>

          <div className="bg-[#111726]/80 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 bg-rose-500/10 text-rose-400 rounded-xl font-bold text-xl">✕</div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Reddedilen İstekler</p>
              <p className="text-2xl font-bold text-rose-400 mt-0.5">{deniedCount}</p>
              <p className="text-[11px] text-slate-500">İptal Edilen İstekler</p>
            </div>
          </div>

          <div className="bg-[#111726]/80 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl font-bold text-xl">📄</div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Erişim Logları</p>
              <p className="text-2xl font-bold text-sky-400 mt-0.5">235</p>
              <p className="text-[11px] text-slate-500">Son 24 Saatlik Kayıt</p>
            </div>
          </div>
        </div>

        {/* Tablo Alanı */}
        <div className="rounded-2xl border border-slate-800 bg-[#111726]/80 p-6 backdrop-blur">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-lg font-bold text-white">İstekler Listesi</h2>
              <p className="text-xs text-slate-400">Bekleyen personel erişim istekleri detaylı tablosu.</p>
            </div>
            
            <input 
              type="text" 
              placeholder="Personel Ara..." 
              className="bg-[#0b0f17] border border-slate-800 rounded-xl px-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 w-full sm:w-64"
            />
          </div>

          {requests.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/80 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <th className="py-3 px-4">Personel Adı / Unvan</th>
                    <th className="py-3 px-4">Erişim Türü & Konum</th>
                    <th className="py-3 px-4">Talep Tarihi</th>
                    <th className="py-3 px-4">Mevcut Durum</th>
                    <th className="py-3 px-4 text-right">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-sm">
                  {requests.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-4 px-4 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-sky-400 flex items-center justify-center font-bold text-sm">
                          {item.initials}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{item.name}</p>
                          <p className="text-xs text-slate-400">{item.role}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-300">
                        <span className="text-sky-400 font-medium">{item.zone}</span>
                      </td>
                      <td className="py-4 px-4 text-slate-400 text-xs">{item.time}</td>
                      <td className="py-4 px-4">
                        <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold rounded-md">
                          İŞLEM BEKLİYOR
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleApprove(item.id)}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition"
                          >
                            Onayla
                          </button>
                          <button
                            onClick={() => handleDeny(item.id)}
                            className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-lg transition"
                          >
                            Reddet
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <div className="text-4xl">🛡️</div>
              <p className="font-bold text-white text-base">Bekleyen erişim talebi bulunmamaktadır.</p>
              <p className="text-xs text-slate-400">Tüm yetkilendirme istekleri güncel durumdadır.</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
