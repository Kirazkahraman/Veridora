'use client';

import Link from 'next/link';

export default function AttendancePage() {
  // Personel Girişi butonuna basılınca çalışacak fonksiyon
  const handlePersonelGirisi = () => {
    alert('Personel Girişi modülü açılıyor!');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      {/* Üst Başlık Alanı */}
      <div className="flex justify-between items-center mb-8 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
        <div>
          <p className="text-xs text-sky-400 font-semibold tracking-wider uppercase">GİRİŞ / ÇIKIŞ</p>
          <h1 className="text-3xl font-bold mt-1">Çalışan Devam Takibi</h1>
          <p className="text-slate-400 text-sm mt-1">Tüm personel giriş ve çıkış kayıtlarını buradan görüntüleyebilirsiniz.</p>
        </div>
        {/* Ana Sayfaya Dön Butonu */}
        <Link 
          href="/dashboard" 
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm rounded-lg border border-slate-700 transition"
        >
          Ana Sayfaya Dön
        </Link>
      </div>

      {/* İçerik Kutuları */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Sol Kutu: Bugünkü Vardiya */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold">Bugünkü Vardiya</h2>
          <p className="text-slate-400 text-sm mb-4">Aktif çalışanların giriş/çıkış zamanları buradan izlenir.</p>
          
          <div className="space-y-3">
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-sm">
              <span className="font-medium text-slate-200">Ahmet Yılmaz</span> · Giriş: 08:12 · <span className="text-emerald-400">Durum: Aktif</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-sm">
              <span className="font-medium text-slate-200">Elif Aras</span> · Çıkış: 17:05 · <span className="text-slate-400">Durum: Tamamlandı</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-sm">
              <span className="font-medium text-slate-200">Murat Korkmaz</span> · Giriş: 08:41 · <span className="text-amber-400">Durum: Geç</span>
            </div>
          </div>
        </div>

        {/* Sağ Kutu: Hızlı İşlemler */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold">Hızlı İşlemler</h2>
            <p className="text-slate-400 text-sm mb-6">Yeni girişleri ve vardiya durumlarını buradan yönetin.</p>
          </div>

          <div className="space-y-3">
            {/* Personel Girişi Butonu */}
            <button 
              onClick={handlePersonelGirisi}
              className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl transition text-center"
            >
              Personel Girişi
            </button>

            {/* Vardiya Raporu Butonu */}
            <Link 
              href="/reports" 
              className="block w-full py-3 border border-slate-700 hover:bg-slate-800 text-slate-200 font-medium rounded-xl transition text-center"
            >
              Vardiya Raporu
            </Link>

            {/* Erişim Onayları Butonu */}
            <Link 
              href="/access" 
              className="block w-full py-3 border border-slate-700 hover:bg-slate-800 text-slate-200 font-medium rounded-xl transition text-center hover:no-underline"
            >
              Erişim Onayları
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}