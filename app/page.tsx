"use client";

import { useI18n } from "../lib/i18n";

export default function HomePage() {
  const { t, locale, setLocale } = useI18n();

  return (
    <main className="min-h-screen bg-[#f3f5ff] text-slate-900">
      <div className="grid min-h-screen grid-cols-[280px_1fr] gap-6 px-4 py-6 lg:px-8 lg:py-8">
        <aside className="rounded-[32px] border border-slate-200 bg-[#2a2658] p-6 text-slate-100 shadow-[0_28px_80px_rgba(47,40,99,0.2)]">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-indigo-500 text-2xl font-semibold">V</div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Veridora</p>
              <h1 className="text-xl font-semibold">{t("brand.title")}</h1>
            </div>
          </div>

          <div className="space-y-3 rounded-[28px] bg-[#302c71] p-4">
            <a href="#" className="flex items-center gap-3 rounded-3xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
              <span>📊</span>
              {t("sidebar.dashboard")}
            </a>
            <a href="#" className="flex items-center gap-3 rounded-3xl px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800">
              <span>🔁</span>
              {t("sidebar.transactions")}
            </a>
            <a href="#" className="flex items-center gap-3 rounded-3xl px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800">
              <span>👛</span>
              {t("sidebar.wallets")}
            </a>
          </div>

          <div className="mt-10 border-t border-slate-700 pt-6">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-slate-400">{t("sidebar.section.transaction")}</p>
            <nav className="space-y-2 text-sm text-slate-200">
              <a href="#" className="flex items-center gap-3 rounded-3xl px-4 py-3 transition hover:bg-slate-800">
                <span>➕</span>
                {t("sidebar.deposit")}
              </a>
              <a href="#" className="flex items-center gap-3 rounded-3xl px-4 py-3 transition hover:bg-slate-800">
                <span>✈️</span>
                {t("sidebar.send")}
              </a>
              <a href="#" className="flex items-center gap-3 rounded-3xl px-4 py-3 transition hover:bg-slate-800">
                <span>🔄</span>
                {t("sidebar.request")}
              </a>
              <a href="#" className="flex items-center gap-3 rounded-3xl px-4 py-3 transition hover:bg-slate-800">
                <span>💱</span>
                {t("sidebar.exchange")}
              </a>
              <a href="#" className="flex items-center gap-3 rounded-3xl px-4 py-3 transition hover:bg-slate-800">
                <span>⬇️</span>
                {t("sidebar.withdrawals")}
              </a>
            </nav>
          </div>

          <div className="mt-10 border-t border-slate-700 pt-6">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-slate-400">{t("sidebar.section.others")}</p>
            <nav className="space-y-2 text-sm text-slate-200">
              <a href="#" className="flex items-center gap-3 rounded-3xl px-4 py-3 transition hover:bg-slate-800">
                <span>🏪</span>
                {t("sidebar.merchants")}
              </a>
              <a href="#" className="flex items-center gap-3 rounded-3xl px-4 py-3 transition hover:bg-slate-800">
                <span>⚠️</span>
                {t("sidebar.disputes")}
              </a>
              <a href="#" className="flex items-center gap-3 rounded-3xl px-4 py-3 transition hover:bg-slate-800">
                <span>🎫</span>
                {t("sidebar.tickets")}
              </a>
              <a href="#" className="flex items-center gap-3 rounded-3xl px-4 py-3 transition hover:bg-slate-800">
                <span>⚙️</span>
                {t("sidebar.settings")}
              </a>
            </nav>
          </div>
        </aside>

        <section className="flex flex-col gap-6">
          <header className="rounded-[32px] bg-white p-6 shadow-[0_24px_80px_rgba(99,102,241,0.14)]">
            <div className="mb-8 flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-xl font-semibold text-white">I</div>
                <div>
                  <h1 className="text-2xl font-semibold text-slate-900">{t("user.name")}</h1>
                  <p className="text-sm text-slate-500">{t("user.subtitle")}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2 rounded-[28px] border border-slate-200 bg-slate-100 px-3 py-2">
                  <select
                    value={locale}
                    onChange={(e) => setLocale(e.target.value as "tr" | "en")}
                    className="bg-transparent text-sm text-slate-700 outline-none"
                  >
                    <option value="tr">TR</option>
                    <option value="en">EN</option>
                  </select>
                </div>
                <button className="rounded-[28px] bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">{t("action.deposit")}</button>
                <button className="rounded-[28px] bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">{t("action.withdraw")}</button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">USD</p>
                <p className="mt-3 text-sm text-slate-500">{t("wallet.usd")}</p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">4903.61</p>
                <p className="mt-2 text-xs text-emerald-500">17.92% ↑</p>
              </article>
              <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">EUR</p>
                <p className="mt-3 text-sm text-slate-500">{t("wallet.eur")}</p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">4903.61</p>
                <p className="mt-2 text-xs text-emerald-500">17.92% ↑</p>
              </article>
              <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">BTC</p>
                <p className="mt-3 text-sm text-slate-500">{t("wallet.btc")}</p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">49.90554321</p>
                <p className="mt-2 text-xs text-emerald-500">17.92% ↑</p>
              </article>
              <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{t("wallet.balance")}</p>
                    <p className="mt-4 text-lg font-semibold text-slate-900">{t("wallet.balanceCheck")}</p>
                  </div>
                  <div className="rounded-3xl bg-indigo-100 px-3 py-2 text-indigo-700">$</div>
                </div>
              </article>
            </div>
          </header>

          <div className="grid gap-6 xl:grid-cols-[1.8fr_1fr]">
            <article className="rounded-[32px] bg-white p-6 shadow-[0_24px_80px_rgba(99,102,241,0.08)]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">{t("merchant.revenue")}</h2>
                  <p className="mt-1 text-sm text-slate-500">{t("merchant.revenueSubtitle")}</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="inline-flex h-3 w-3 rounded-full bg-indigo-500" />
                  {t("chart.legend.deligram")}
                  <span className="inline-flex h-3 w-3 rounded-full bg-amber-400" />
                  {t("chart.legend.amazon")}
                </div>
              </div>
              <div className="relative h-[320px] overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 p-4">
                <div className="absolute inset-x-0 top-6 flex justify-between text-[11px] text-slate-400">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
                <div className="absolute inset-x-0 bottom-4 h-px bg-slate-200" />
                <div className="absolute inset-x-6 bottom-20 h-[2px] rounded-full bg-indigo-200" />
                <div className="absolute inset-x-6 bottom-28 h-[2px] rounded-full bg-amber-200" />
                <div className="absolute inset-x-6 bottom-36 h-[2px] rounded-full bg-slate-200" />
                <div className="absolute left-[22%] top-32 w-24 rounded-3xl border border-slate-300 bg-slate-100 px-3 py-2 text-xs text-slate-700 shadow-sm">
                  {t("chart.tooltipDate")}
                  <strong className="block text-sm text-slate-900">$1403.88 {t("chart.profit")}</strong>
                </div>
              </div>
            </article>

            <div className="grid gap-6">
              <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-slate-900">{t("qr.title")}</h3>
                  <button className="text-slate-400 transition hover:text-slate-600">✏️</button>
                </div>
                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-center">
                  <div className="mx-auto h-44 w-44 rounded-3xl bg-slate-900" />
                </div>
                <div className="mt-5 text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">{t("qr.description")}</p>
                  <p className="mt-2 text-slate-500">{t("qr.help")}</p>
                </div>
                <button className="mt-6 w-full rounded-[28px] bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">{t("btn.print")}</button>
              </article>

              <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm text-slate-500">{t("create.new")}</p>
                  <span className="text-2xl text-slate-400">→</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{t("create.merchant")}</h3>
              </article>

              <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-3xl bg-indigo-100 p-3 text-indigo-700">?</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t("support.title")}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">{t("support.description")}</p>
                <button className="mt-6 w-full rounded-[28px] bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">{t("btn.createTicket")}</button>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
