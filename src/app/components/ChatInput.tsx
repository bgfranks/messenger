'use client'
import { FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Message } from '../../../typings'

export default function ChatInput() {
  const [input, setInput] = useState('')

  const uploadMessaageToUpstash = async (message: Message) => {
    const res = await fetch('/api/addMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })

    const data = await res.json()

    console.log('Message added', data)
  }

  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input) return

    const messageToSend = input
    setInput('')

    const id = uuid()
    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: 'Faker',
      profilePic:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4aa68f80-158e-4744-95e9-da53a23e1eba/dasli0e-0189993a-d23c-4825-a6fc-aa0403374080.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhYTY4ZjgwLTE1OGUtNDc0NC05NWU5LWRhNTNhMjNlMWViYVwvZGFzbGkwZS0wMTg5OTkzYS1kMjNjLTQ4MjUtYTZmYy1hYTA0MDMzNzQwODAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fIqn95jSk9V2Ue2AWhx7Ow8k4B1T7to-RjMXJs04mmA',
      email: 'thisisabullshitemail@fakeemail.com',
    }

    uploadMessaageToUpstash(message)
  }

  return (
    <form
      onSubmit={addMessage}
      className='fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100'
    >
      <input
        className='flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed'
        placeholder='Enter a message here...'
        onChange={(e) => setInput(e.target.value)}
        type='text'
      />
      <button
        className='btn disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={!input}
        type='submit'
      >
        Send
      </button>
    </form>
  )
}
