'use client'

import { useState } from 'react'
import { MessageSquare, Send } from 'lucide-react'
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
    <section id="comments" className="scroll-mt-20 bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sage">留言區</p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">街坊心聲</h2>
          <p className="mt-4 text-lg text-ink-muted">分享你對社區換物與修繕服務的想法</p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border-2 border-border-warm bg-white p-5 sm:p-6"
          >
            <div className="mb-4 flex items-center gap-2 text-sage-dark">
              <MessageSquare className="h-5 w-5" />
              <span className="font-semibold">留下你的留言</span>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="你的稱呼（例如：陳婆婆）"
                className="w-full rounded-xl border-2 border-border-warm px-4 py-3 text-base focus:border-sage focus:outline-none"
                maxLength={30}
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="想分享嘅心聲..."
                rows={3}
                className="w-full resize-none rounded-xl border-2 border-border-warm px-4 py-3 text-base focus:border-sage focus:outline-none"
                maxLength={300}
              />
            </div>
            <button
              type="submit"
              disabled={!name.trim() || !message.trim()}
              className="mt-4 inline-flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-xl bg-sage px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-sage-dark disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              <Send className="h-5 w-5" />
              發表留言
            </button>
          </form>

          <ul className="mt-8 space-y-4">
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="rounded-2xl border-2 border-border-warm bg-white p-5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-foreground">{comment.name}</span>
                  <span className="text-sm text-muted">{comment.time}</span>
                </div>
                <p className="mt-2 text-base leading-relaxed text-ink-muted">{comment.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
