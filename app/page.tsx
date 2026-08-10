export default function HomePage() {
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
          </div>

          <div className="space-y-4 rounded-3xl bg-slate-900/90 p-4">
            <button className="flex w-full items-center justify-between rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-500/20">
              <span>Account</span>
              <span className="text-xs uppercase tracking-[0.2em]">→</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-2xl border border-slate-800 px-4 py-3 text-sm text-slate-300">
              <span>Logout</span>
            </button>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-slate-500">Navigation</p>
            <nav className="space-y-2 text-sm">
              <a className="flex items-center gap-3 rounded-2xl bg-sky-500/10 px-4 py-3 text-sky-300" href="#">
                <span>🏠</span>
                Dashboard
              </a>
              <a className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-300 hover:bg-slate-900/80" href="#">
                <span>ℹ️</span>
                System Information
              </a>
              <a className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-300 hover:bg-slate-900/80" href="#">
                <span>✅</span>
                Whitelist
              </a>
              <a className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-300 hover:bg-slate-900/80" href="#">
                <span>⚠️</span>
                Warning Pages
              </a>
              <a className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-300 hover:bg-slate-900/80" href="#">
                <span>🧾</span>
                Login History
              </a>
            </nav>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-slate-500">Security</p>
            <nav className="space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-4 py-3 text-slate-200">
                <span>SQL Injection</span>
                <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[11px] uppercase tracking-[0.2em] text-emerald-950">on</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-4 py-3 text-slate-200">
                <span>Bad Bots</span>
                <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[11px] uppercase tracking-[0.2em] text-emerald-950">on</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-4 py-3 text-slate-200">
                <span>Proxy</span>
                <span className="rounded-full bg-red-500 px-2 py-0.5 text-[11px] uppercase tracking-[0.2em] text-white">off</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-4 py-3 text-slate-200">
                <span>Spam</span>
                <span className="rounded-full bg-red-500 px-2 py-0.5 text-[11px] uppercase tracking-[0.2em] text-white">off</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-4 py-3 text-slate-200">
                <span>Bad Words</span>
                <span className="rounded-full bg-sky-500 px-2 py-0.5 text-[11px] uppercase tracking-[0.2em] text-slate-950">off</span>
              </div>
            </nav>
          </div>
        </aside>

        <section className="bg-[#0f172a] p-8">
          <header className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">Dashboard</h2>
              <p className="mt-2 text-sm text-slate-400">Admin Panel / Dashboard</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-slate-950/90 px-4 py-3 text-sm text-slate-300">
              <span>IP Lookup</span>
              <button className="rounded-2xl bg-slate-800 px-3 py-2 text-slate-200">Ara</button>
            </div>
          </header>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-3xl bg-cyan-600/90 p-6 text-white shadow-xl shadow-cyan-600/10">
              <p className="text-3xl font-bold">0</p>
              <p className="mt-2 text-sm opacity-90">SQLi Attacks</p>
              <div className="mt-6 text-sm font-medium uppercase tracking-[0.2em]">View Logs →</div>
            </article>
            <article className="rounded-3xl bg-red-600/90 p-6 text-white shadow-xl shadow-red-600/10">
              <p className="text-3xl font-bold">0</p>
              <p className="mt-2 text-sm opacity-90">Bad Bots</p>
              <div className="mt-6 text-sm font-medium uppercase tracking-[0.2em]">View Logs →</div>
            </article>
            <article className="rounded-3xl bg-emerald-600/90 p-6 text-white shadow-xl shadow-emerald-600/10">
              <p className="text-3xl font-bold">0</p>
              <p className="mt-2 text-sm opacity-90">Proxies</p>
              <div className="mt-6 text-sm font-medium uppercase tracking-[0.2em]">View Logs →</div>
            </article>
            <article className="rounded-3xl bg-amber-500/90 p-6 text-slate-950 shadow-xl shadow-amber-500/10">
              <p className="text-3xl font-bold">0</p>
              <p className="mt-2 text-sm opacity-90">Spammers</p>
              <div className="mt-6 text-sm font-medium uppercase tracking-[0.2em]">View Logs →</div>
            </article>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.8fr_1fr]">
            <article className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Threat Statistics</h3>
                <span className="text-sm text-slate-400">Overall Statistics</span>
              </div>
              <div className="mt-6 h-72 rounded-3xl bg-slate-900" />
            </article>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">SQL Injections</p>
                <p className="mt-4 text-4xl font-semibold text-white">13</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Bad Bots</p>
                <p className="mt-4 text-4xl font-semibold text-white">18</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Proxies</p>
                <p className="mt-4 text-4xl font-semibold text-white">7</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Spammers</p>
                <p className="mt-4 text-4xl font-semibold text-white">4</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
