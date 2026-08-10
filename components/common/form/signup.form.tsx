'use client'

import { FormEvent, useState } from 'react'
import Input from '@/components/common/ui/input'
import Button from '@/components/common/ui/button'

export default function SignupForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      setMessage('Complete all fields to create your account.')
      return
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.')
      return
    }

    setMessage('Your account details are ready to be connected to the auth service.')
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
      <Input
        autoComplete="name"
        id="name"
        label="Full name"
        name="name"
        onChange={(event) => setName(event.target.value)}
        placeholder="Your full name"
        required
        type="text"
        value={name}
      />
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
      <Input
        autoComplete="new-password"
        id="password"
        label="Password"
        name="password"
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Create a password"
        required
        type="password"
        value={password}
      />
      <Input
        autoComplete="new-password"
        id="confirm-password"
        label="Confirm password"
        name="confirm-password"
        onChange={(event) => setConfirmPassword(event.target.value)}
        placeholder="Repeat your password"
        required
        type="password"
        value={confirmPassword}
      />

      <Button type="submit">
        Create account
      </Button>

      <p aria-live="polite" className="min-h-5 text-center text-sm text-slate-500">
        {message}
      </p>
    </form>
  )
}
