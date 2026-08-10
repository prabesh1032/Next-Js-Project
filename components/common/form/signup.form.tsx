'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import Input from '@/components/common/ui/input'
import Button from '@/components/common/ui/button'

type SignupFormValues = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function SignupForm() {
  const [message, setMessage] = useState('')
  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
  } = useForm<SignupFormValues>()

  const onSubmit: SubmitHandler<SignupFormValues> = (data) => {
    console.log('Registration data:', data)
    setMessage('Your account details are ready to be connected to the auth service.')
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <Input
        autoComplete="name"
        id="name"
        label="Full name"
        name="name"
        placeholder="Your full name"
        {...register('name', { required: 'Full name is required.' })}
        type="text"
      />
      {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
      <Input
        autoComplete="email"
        id="email"
        label="Email address"
        name="email"
        placeholder="you@example.com"
        {...register('email', {
          required: 'Email address is required.',
          pattern: { value: /\S+@\S+\.\S+/, message: 'Enter a valid email address.' },
        })}
        type="email"
      />
      {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
      <Input
        autoComplete="new-password"
        id="password"
        label="Password"
        name="password"
        placeholder="Create a password"
        {...register('password', {
          required: 'Password is required.',
          minLength: { value: 8, message: 'Password must be at least 8 characters.' },
        })}
        type="password"
      />
      {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>}
      <Input
        autoComplete="new-password"
        id="confirm-password"
        label="Confirm password"
        name="confirm-password"
        placeholder="Repeat your password"
        {...register('confirmPassword', {
          required: 'Please confirm your password.',
          validate: (value) => value === getValues('password') || 'Passwords do not match.',
        })}
        type="password"
      />
      {errors.confirmPassword && <p className="mt-2 text-sm text-red-600">{errors.confirmPassword.message}</p>}

      <Button type="submit">
        Create account
      </Button>

      <p aria-live="polite" className="min-h-5 text-center text-sm text-slate-500">
        {message}
      </p>
    </form>
  )
}
