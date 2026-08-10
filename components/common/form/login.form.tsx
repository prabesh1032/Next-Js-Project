'use client'

import { FormEvent, useState } from 'react'
import Input from '@/components/common/ui/input'
import Button from '@/components/common/ui/button'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email || !password) {
      setMessage('Enter your email and password to continue.')
      return
    }

    setMessage('Your sign-in details are ready to be connected to the auth service.')
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
      <div>
        <Input
          autoComplete="email"
          id="email"
          label="Email address"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          required
          type="email"
          value={email}
        />
      </div>

      <div>
        <div className="mb-2 flex justify-end">
          <a className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-500" href="#forgot-password">
            Forgot password?
          </a>
        </div>
        <Input
          autoComplete="current-password"
          id="password"
          label="Password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          required
          type="password"
          value={password}
        />
      </div>

      <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
        <input
          checked={rememberMe}
          className="h-4 w-4 rounded border-slate-300 text-indigo-600 accent-indigo-600 focus:ring-indigo-500"
          onChange={(event) => setRememberMe(event.target.checked)}
          type="checkbox"
        />
        Remember me for 30 days
      </label>

      <Button type="submit">
        Sign in
      </Button>

      <p aria-live="polite" className="min-h-5 text-center text-sm text-slate-500">
        {message}
      </p>
    </form>
  )
}
