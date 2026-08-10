import React, { useState } from "react";
import { useI18n } from "../lib/i18n";

export default function HomePage() {
  const [count, setCount] = useState(0);
  const { t, locale, setLocale } = useI18n();

  return (
    <main className="min-h-screen bg-[#141518] text-slate-100">
      <div className="grid min-h-screen grid-cols-[260px_1fr]">
        <aside className="border-r border-slate-800 bg-slate-950/95 p-6">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-sky-400">S</div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Project</p>
              <h1 className="text-xl font-semibold">SECURITY</h1>
            </div>
            <div className="ml-auto">
              <select
                value={locale}
                onChange={(e) => setLocale(e.target.value as "tr" | "en")}
                className="rounded-md bg-slate-800 px-2 py-1 text-sm text-slate-200"
              >
                <option value="tr">TR</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl bg-slate-900/90 p-4">
            <button className="flex w-full items-center justify-between rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-500/20">
              <span>{t("account")}</span>
              <span className="text-xs uppercase tracking-[0.2em]">→</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-2xl border border-slate-800 px-4 py-3 text-sm text-slate-300">
              <span>{t("logout")}</span>
            </button>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-slate-500">{t("navigation")}</p>
            <nav className="space-y-2 text-sm">
              <a className="flex items-center gap-3 rounded-2xl bg-sky-500/10 px-4 py-3 text-sky-300" href="#">
                <span>🏠</span>
                {t("dashboard.title")}
              </a>
            </nav>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-slate-500">{t("security")}</p>
            <nav className="space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-4 py-3 text-slate-200">
                <span>{t('security.sqlInjection')}</span>
                <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[11px] uppercase tracking-[0.2em] text-emerald-950">{t('status.on')}</span>
              </div>
            </nav>
          </div>
        </aside>

        <section className="bg-[#0f172a] p-8">
          <header className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">{t("dashboard.title")}</h2>
              <p className="mt-2 text-sm text-slate-400">{t("dashboard.subtitle")}</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-slate-950/90 px-4 py-3 text-sm text-slate-300">
              <span>{t('ipLookup')}</span>
              <button className="rounded-2xl bg-slate-800 px-3 py-2 text-slate-200">{t('search')}</button>
            </div>
          </header>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-3xl bg-cyan-600/90 p-6 text-white shadow-xl shadow-cyan-600/10">
              <p className="text-3xl font-bold">0</p>
              <p className="mt-2 text-sm opacity-90">{t("card.sqli")}</p>
              <div className="mt-6 text-sm font-medium uppercase tracking-[0.2em]">{t("viewLogs")}</div>
            </article>
            <article className="rounded-3xl bg-red-600/90 p-6 text-white shadow-xl shadow-red-600/10">
              <p className="text-3xl font-bold">0</p>
              <p className="mt-2 text-sm opacity-90">{t("card.badbots")}</p>
              <div className="mt-6 text-sm font-medium uppercase tracking-[0.2em]">{t("viewLogs")}</div>
            </article>
            <article className="rounded-3xl bg-emerald-600/90 p-6 text-white shadow-xl shadow-emerald-600/10">
              <p className="text-3xl font-bold">0</p>
              <p className="mt-2 text-sm opacity-90">{t("card.proxies")}</p>
              <div className="mt-6 text-sm font-medium uppercase tracking-[0.2em]">{t("viewLogs")}</div>
            </article>
            <article className="rounded-3xl bg-amber-500/90 p-6 text-slate-950 shadow-xl shadow-amber-500/10">
              <p className="text-3xl font-bold">0</p>
              <p className="mt-2 text-sm opacity-90">{t("card.spammers")}</p>
              <div className="mt-6 text-sm font-medium uppercase tracking-[0.2em]">{t("viewLogs")}</div>
            </article>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.8fr_1fr]">
            <article className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{t("threat.title")}</h3>
                <span className="text-sm text-slate-400">{t("overall")}</span>
              </div>
              <div className="mt-6 h-72 rounded-3xl bg-slate-900" />
            </article>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{t('sqlInjections')}</p>
                <p className="mt-4 text-4xl font-semibold text-white">13</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
