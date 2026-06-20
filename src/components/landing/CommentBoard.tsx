'use client'

import { useState } from 'react'
import { ChatCircle, PaperPlaneTilt } from '@phosphor-icons/react'
import { Reveal } from '@/components/motion/Reveal'
import { initialComments } from '@/lib/landingData'

interface Comment {
  id: string
  name: string
  message: string
  time: string
}

export function CommentBoard() {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    setComments([
      {
        id: `c-${Date.now()}`,
        name: name.trim(),
        message: message.trim(),
        time: '剛剛',
      },
      ...comments,
    ])
    setName('')
    setMessage('')
  }

  return (
    <section id="comments" className="section-padding scroll-mt-20 bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <h2 className="section-title text-3xl text-foreground sm:text-4xl">街坊心聲</h2>
            <p className="mt-5 max-w-prose text-lg text-ink-muted">
              分享你對社區換物與修繕服務的想法，或閱讀其他街坊的參與經驗。
            </p>

            <form onSubmit={handleSubmit} className="mt-10 rounded-2xl bg-page p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2 text-sage-dark">
                <ChatCircle className="h-5 w-5" weight="duotone" />
                <span className="font-semibold">留下你的留言</span>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="你的稱呼（例如：陳婆婆）"
                  className="interactive w-full rounded-xl border border-border-warm bg-card px-4 py-3 text-base focus:border-sage focus:outline-none"
                  maxLength={30}
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="想分享嘅心聲..."
                  rows={3}
                  className="interactive w-full resize-none rounded-xl border border-border-warm bg-card px-4 py-3 text-base focus:border-sage focus:outline-none"
                  maxLength={300}
                />
              </div>
              <button
                type="submit"
                disabled={!name.trim() || !message.trim()}
                className="interactive mt-4 inline-flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-xl bg-sage px-5 py-3 text-base font-semibold text-white hover:bg-sage-dark disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                <PaperPlaneTilt className="h-5 w-5" weight="bold" />
                發表留言
              </button>
            </form>
          </Reveal>

          <ul className="columns-1 gap-4 space-y-4 sm:columns-2">
            {comments.map((comment, index) => (
              <Reveal
                key={comment.id}
                as="li"
                delay={Math.min(index * 0.06, 0.36)}
                amount={0.15}
                className={[
                  'break-inside-avoid rounded-2xl bg-page p-5 shadow-warm transition-shadow hover:shadow-warm-lg',
                  index === 0 ? 'bg-sage-light/50' : '',
                ].join(' ')}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-foreground">{comment.name}</span>
                  <span className="text-sm text-muted">{comment.time}</span>
                </div>
                <p className="mt-2 text-base leading-relaxed text-ink-muted">{comment.message}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
