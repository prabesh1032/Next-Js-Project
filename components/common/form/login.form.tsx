'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '@/components/common/ui/input'
import Button from '@/components/common/ui/button'

type LoginFormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export default function LoginForm() {
  const [message, setMessage] = useState('')
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormValues>()

  function onSubmit(data: LoginFormValues) {
    console.log('Login data:', data)
    setMessage('Your sign-in details are ready to be connected to the auth service.')
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          autoComplete="email"
          id="email"
          name='email'
          label="Email address"
          placeholder="you@example.com"
          {...register('email', { required: 'Email address is required.' })}
          type="email"
        />
        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
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
          name='password'
          label="Password"
          placeholder="Enter your password"
          {...register('password', { required: 'Password is required.' })}
          type="password"
        />
        {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>}
      </div>

      <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
        <input
          className="h-4 w-4 rounded border-slate-300 text-indigo-600 accent-indigo-600 focus:ring-indigo-500"
          {...register('rememberMe')}
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
