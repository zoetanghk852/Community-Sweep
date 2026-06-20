'use client'

import { useState } from 'react'
import { CheckCircle, ClipboardText } from '@phosphor-icons/react'

interface FormData {
  name: string
  phone: string
  district: string
  interest: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  district: '',
  interest: '換物市集',
  message: '',
}

function validatePhone(phone: string) {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 8
}

export function RegistrationForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (name === 'name' || name === 'phone') {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const nextErrors: FormErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = '請填寫姓名'
    }
    if (!form.phone.trim()) {
      nextErrors.phone = '請填寫聯絡電話'
    } else if (!validatePhone(form.phone)) {
      nextErrors.phone = '電話號碼至少需要 8 位數字'
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-sage-light/50 p-8 text-center shadow-warm">
        <CheckCircle className="mx-auto h-12 w-12 text-sage-dark" weight="duotone" />
        <h3 className="mt-4 text-xl font-bold text-foreground">登記成功</h3>
        <p className="mt-2 text-base text-ink-muted">
          多謝 {form.name}，我們會在 3 個工作天內以電話聯絡你，介紹最近的社區活動。
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setForm(initialForm)
            setErrors({})
          }}
          className="interactive mt-6 text-base font-semibold text-sage-dark underline hover:text-sage"
        >
          再填一份登記表
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-card p-5 shadow-warm sm:p-7"
    >
      <div className="mb-5 flex items-center gap-2 text-sage-dark">
        <ClipboardText className="h-5 w-5" weight="duotone" />
        <span className="font-semibold">活動登記表</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            姓名 <span className="text-terracotta">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="例如：陳美玲"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={[
              'w-full rounded-xl border-2 px-4 py-3 text-base transition-colors focus:border-sage focus:outline-none',
              errors.name ? 'border-terracotta' : 'border-border-warm',
            ].join(' ')}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-terracotta-dark" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            聯絡電話 <span className="text-terracotta">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="例如：9123 4567"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={[
              'w-full rounded-xl border-2 px-4 py-3 text-base transition-colors focus:border-sage focus:outline-none',
              errors.phone ? 'border-terracotta' : 'border-border-warm',
            ].join(' ')}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-sm text-terracotta-dark" role="alert">
              {errors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="district" className="mb-1.5 block text-sm font-medium text-foreground">
            居住區域
          </label>
          <input
            id="district"
            name="district"
            type="text"
            value={form.district}
            onChange={handleChange}
            placeholder="例如：屯門東邨"
            className="w-full rounded-xl border-2 border-border-warm px-4 py-3 text-base transition-colors focus:border-sage focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-foreground">
            感興趣的活動
          </label>
          <select
            id="interest"
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="w-full rounded-xl border-2 border-border-warm px-4 py-3 text-base transition-colors focus:border-sage focus:outline-none"
          >
            <option>換物市集</option>
            <option>做義工</option>
            <option>試水溫參觀</option>
            <option>想先了解，稍後再決定</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          備註（選填）
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="例如：有幾件舊衫想交換，需要義工上門協助"
          className="w-full resize-none rounded-xl border-2 border-border-warm px-4 py-3 text-base transition-colors focus:border-sage focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="interactive mt-6 inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-2xl bg-terracotta px-6 py-4 text-lg font-semibold text-white hover:bg-terracotta-dark hover:shadow-warm sm:w-auto"
      >
        提交登記
      </button>

      <p className="mt-3 text-sm text-muted">
        此為示範表單，資料不會傳送至伺服器。正式試點將符合《個人資料（私隱）條例》處理。
      </p>
    </form>
  )
}
