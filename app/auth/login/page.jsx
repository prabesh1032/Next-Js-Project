import Link from 'next/link'
import LoginForm from '@/components/common/form/login.form'

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-12">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/25 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

      <section className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/30 lg:grid-cols-[1fr_1.05fr]">
        <div className="hidden flex-col justify-between bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 p-12 text-white lg:flex">
          <div>
            <div className="mb-16 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-lg font-bold ring-1 ring-white/25">N</span>
              <span className="text-lg font-bold tracking-tight">Nexa</span>
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">Welcome back</p>
            <h1 className="max-w-sm text-4xl font-bold leading-tight">Everything you need, right where you left it.</h1>
            <p className="mt-6 max-w-sm text-base leading-7 text-indigo-100/80">Sign in to pick up where you left off and keep your work moving forward.</p>
          </div>
          <p className="text-sm text-indigo-200/70">Simple tools. Better days.</p>
        </div>

        <div className="p-8 sm:p-12">
          <div className="mb-8 lg:hidden">
            <div className="flex items-center gap-3 text-slate-900">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">N</span>
              <span className="text-lg font-bold tracking-tight">Nexa</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Account access</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Sign in to your account</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">Enter your details below to continue.</p>
          </div>

          <LoginForm />

          <p className="mt-8 text-center text-sm text-slate-500">
            Don&apos;t have an account?{' '}
            <Link className="font-semibold text-indigo-600 transition hover:text-indigo-500" href="/auth/signup">
              Create one
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
