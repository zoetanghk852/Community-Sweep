'use client'

import { useState } from 'react'
import { CheckCircle2, ClipboardList } from 'lucide-react'

interface FormData {
  name: string
  phone: string
  district: string
  interest: string
  message: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  district: '',
  interest: '主題換物日',
  message: '',
}

export function RegistrationForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border-2 border-sage bg-sage-light/50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-sage-dark" />
        <h3 className="mt-4 text-xl font-bold text-foreground">登記成功！</h3>
        <p className="mt-2 text-base text-ink-muted">
          多謝 {form.name}！我們會在 3 個工作天內以電話聯絡你，介紹最近的社區活動。
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setForm(initialForm)
          }}
          className="mt-6 text-base font-semibold text-sage-dark underline hover:text-sage"
        >
          再填一份登記表
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border-2 border-border-warm bg-white p-5 sm:p-6"
    >
      <div className="mb-5 flex items-center gap-2 text-sage-dark">
        <ClipboardList className="h-5 w-5" />
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
            className="w-full rounded-xl border-2 border-border-warm px-4 py-3 text-base focus:border-sage focus:outline-none"
          />
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
            className="w-full rounded-xl border-2 border-border-warm px-4 py-3 text-base focus:border-sage focus:outline-none"
          />
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
            className="w-full rounded-xl border-2 border-border-warm px-4 py-3 text-base focus:border-sage focus:outline-none"
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
            className="w-full rounded-xl border-2 border-border-warm px-4 py-3 text-base focus:border-sage focus:outline-none"
          >
            <option>主題換物日</option>
            <option>維修技能工作坊</option>
            <option>舊物故事分享會</option>
            <option>藝術重組體驗</option>
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
          className="w-full resize-none rounded-xl border-2 border-border-warm px-4 py-3 text-base focus:border-sage focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-2xl bg-terracotta px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-terracotta-dark sm:w-auto"
      >
        提交登記
      </button>

      <p className="mt-3 text-sm text-muted">
        此為示範表單，資料不會傳送至伺服器。正式試點將符合《個人資料（私隱）條例》處理。
      </p>
    </form>
  )
}
