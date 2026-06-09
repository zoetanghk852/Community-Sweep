'use client'

import { useState } from 'react'
import { CreditCard, Lock, CheckCircle2 } from 'lucide-react'
import { workshopOptions } from '@/lib/landingData'

type PaymentStep = 'select' | 'details' | 'processing' | 'success'

export function MockPaymentGateway() {
  const [step, setStep] = useState<PaymentStep>('select')
  const [selectedId, setSelectedId] = useState(workshopOptions[0].id)
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')

  const selected = workshopOptions.find((w) => w.id === selectedId)!

  function formatCard(value: string) {
    return value
      .replace(/\D/g, '')
      .slice(0, 16)
      .replace(/(.{4})/g, '$1 ')
      .trim()
  }

  function handlePay(e: React.FormEvent) {
    e.preventDefault()
    setStep('processing')
    setTimeout(() => setStep('success'), 1500)
  }

  function reset() {
    setStep('select')
    setCardNumber('')
    setCardName('')
  }

  return (
    <section id="payment-session" className="scroll-mt-20 bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sage">模擬付款閘道</p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">工作坊報名付款 Session</h2>
          <p className="mt-4 text-lg text-ink-muted">
            示範完整付款 session：選擇工作坊 → 填寫資料 → 處理中 → 成功（模擬，不會實際扣款）
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-lg">
          <div className="overflow-hidden rounded-2xl border-2 border-border-warm bg-white shadow-lg">
            <div className="flex items-center justify-between bg-sage px-5 py-3 text-white">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span className="text-sm font-semibold">安全付款（示範）</span>
              </div>
              <CreditCard className="h-5 w-5 opacity-80" />
            </div>

            <div className="p-5 sm:p-6">
              {step === 'select' && (
                <>
                  <p className="mb-4 font-semibold text-foreground">選擇工作坊</p>
                  <div className="space-y-3">
                    {workshopOptions.map((workshop) => (
                      <label
                        key={workshop.id}
                        className={[
                          'flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-colors',
                          selectedId === workshop.id
                            ? 'border-sage bg-sage-light/40'
                            : 'border-border-warm hover:border-sage/50',
                        ].join(' ')}
                      >
                        <input
                          type="radio"
                          name="workshop"
                          value={workshop.id}
                          checked={selectedId === workshop.id}
                          onChange={() => setSelectedId(workshop.id)}
                          className="mt-1"
                        />
                        <div>
                          <span className="mr-2 text-xl" role="img" aria-hidden>
                            {workshop.emoji}
                          </span>
                          <span className="font-semibold text-foreground">{workshop.title}</span>
                          <p className="mt-1 text-sm text-ink-muted">{workshop.description}</p>
                          <p className="mt-1 text-sm font-bold text-sage-dark">
                            {workshop.price === 0 ? '免費' : `HK$ ${workshop.price}`}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep('details')}
                    className="mt-6 w-full rounded-xl bg-sage py-3.5 text-base font-semibold text-white hover:bg-sage-dark"
                  >
                    繼續付款
                  </button>
                </>
              )}

              {step === 'details' && (
                <form onSubmit={handlePay}>
                  <button
                    type="button"
                    onClick={() => setStep('select')}
                    className="mb-4 text-sm text-sage-dark hover:underline"
                  >
                    ← 返回選擇
                  </button>

                  <div className="mb-4 rounded-xl bg-cream p-4">
                    <p className="text-sm text-muted">付款項目</p>
                    <p className="font-semibold text-foreground">{selected.title}</p>
                    <p className="mt-1 text-lg font-bold text-sage-dark">
                      {selected.price === 0 ? '免費' : `HK$ ${selected.price}.00`}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label htmlFor="cardName" className="mb-1 block text-sm font-medium">
                        持卡人姓名
                      </label>
                      <input
                        id="cardName"
                        type="text"
                        required
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="陳美玲"
                        className="w-full rounded-xl border-2 border-border-warm px-4 py-3 text-base focus:border-sage focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="cardNumber" className="mb-1 block text-sm font-medium">
                        信用卡號碼（示範）
                      </label>
                      <input
                        id="cardNumber"
                        type="text"
                        required
                        value={cardNumber}
                        onChange={(e) => setCardNumber(formatCard(e.target.value))}
                        placeholder="4242 4242 4242 4242"
                        className="w-full rounded-xl border-2 border-border-warm px-4 py-3 font-mono text-base focus:border-sage focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!cardName || cardNumber.replace(/\s/g, '').length < 16}
                    className="mt-6 w-full rounded-xl bg-terracotta py-3.5 text-base font-semibold text-white hover:bg-terracotta-dark disabled:opacity-50"
                  >
                    {selected.price === 0 ? '確認報名' : `確認付款 HK$ ${selected.price}`}
                  </button>
                </form>
              )}

              {step === 'processing' && (
                <div className="py-12 text-center">
                  <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-sage-light border-t-sage" />
                  <p className="mt-4 font-medium text-foreground">處理中...</p>
                </div>
              )}

              {step === 'success' && (
                <div className="py-8 text-center">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-sage" />
                  <h3 className="mt-4 text-xl font-bold text-foreground">報名成功！</h3>
                  <p className="mt-2 text-base text-ink-muted">
                    已成功報名「{selected.title}」
                    {selected.price > 0 && `，模擬付款 HK$ ${selected.price}.00`}
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-6 text-base font-semibold text-sage-dark underline"
                  >
                    再試一次
                  </button>
                </div>
              )}
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-muted">
            此為 UI 示範，不連接真實支付系統。
          </p>
        </div>
      </div>
    </section>
  )
}
