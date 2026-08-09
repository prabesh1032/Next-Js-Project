import type { InputHTMLAttributes } from 'react'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'id' | 'placeholder' | 'type'> & {
  name: string
  id: string
  placeholder: string
  type: NonNullable<InputHTMLAttributes<HTMLInputElement>['type']>
  label: string
}

export default function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor={props.id}>
        {label}
      </label>
      <input
        className={`block w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 ${className}`}
        {...props}
      />
    </div>
  )
}
