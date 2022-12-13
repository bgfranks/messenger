'use client'
import { FormEvent, useState } from 'react'

export default function ChatInput() {
  const [input, setInput] = useState('')

  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input) return

    const messageToSend = input
    setInput('')
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