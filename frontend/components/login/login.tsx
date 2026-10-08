export default function Login() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#f5f7fb] px-4 py-8 text-slate-900 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-cyan-200/50 blur-3xl" />

      <div className="relative grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_28px_90px_-30px_rgba(31,41,83,0.28)] lg:min-h-[680px] lg:grid-cols-[1.02fr_1fr]">
        <section className="relative hidden flex-col justify-between overflow-hidden bg-[#172554] p-12 text-white lg:flex xl:p-16">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10 bg-white/5" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border border-white/10 bg-indigo-400/10" />
          <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative z-10 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-indigo-700 shadow-lg shadow-indigo-950/20">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12.1V21" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-xl font-semibold tracking-tight">Workspace</span>
          </div>

          <div className="relative z-10 my-12">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-indigo-100 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Your work, beautifully organized
            </div>
            <h1 className="max-w-md text-5xl font-semibold leading-[1.12] tracking-tight xl:text-[3.4rem]">A better place to make progress.</h1>
            <p className="mt-6 max-w-sm text-base leading-8 text-indigo-100/75">Keep your projects, tasks, and team in sync. Pick up right where you left off.</p>

          </div>

          <p className="relative z-10 text-sm text-indigo-100/50">One workspace. Every next step.</p>
        </section>

        <section className="flex flex-col justify-center px-6 py-10 sm:px-12 sm:py-14 lg:px-14 xl:px-20">
          <div className="mb-12 flex items-center gap-3 lg:hidden">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-700 text-white">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12.1V21" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-lg font-semibold tracking-tight">Workspace</span>
          </div>

          <div className="max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Welcome back</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Sign in to your account</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">Enter your details below to continue to your workspace.</p>

            <form className="mt-10 space-y-6">
              <div>
                <label htmlFor="email" className="mb-2.5 block text-sm font-medium text-slate-700">Email address</label>
                <div className="relative">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
                    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className="h-14 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10" />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="mb-2.5 block text-sm font-medium text-slate-700">Password</label>
                <div className="relative">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400">
                    <rect x="4" y="10" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                  <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" className="h-14 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10" />
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <input id="remember" name="remember" type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-indigo-600" />
                <label htmlFor="remember" className="text-sm text-slate-600">Remember me</label>
              </div>

              <button type="button" className="group flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 hover:shadow-indigo-600/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30 active:scale-[0.99]">
                Sign in
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition group-hover:translate-x-1">
                  <path d="M4 12h16m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>

            <div className="mt-10 flex items-center gap-3 text-xs text-slate-400">
              <span className="h-px flex-1 bg-slate-200" />
              A space for your best work
              <span className="h-px flex-1 bg-slate-200" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
