import { useEffect, useRef } from 'react'
import { useWebSocket } from '../hooks/useWebSocket'

interface Message {
  id: string
  sender: string
  content: string
  timestamp: string
}

interface ChatAreaProps {
  selectedContact: { id: string; username: string } | null
}

export default function ChatArea({ selectedContact }: ChatAreaProps) {
  const { messages, sendMessage } = useWebSocket()
  const messageEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const input = form.elements.namedItem('message') as HTMLInputElement
    if (input.value.trim()) {
      sendMessage(input.value)
      input.value = ''
    }
  }

  if (!selectedContact) {
    return <div className="flex-1 p-4">Select a contact to start chatting</div>
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="bg-gray-200 p-4">
        <h2 className="text-xl font-bold">{selectedContact.username}</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message: Message) => (
          <div key={message.id} className="mb-4">
            <strong>{message.sender}: </strong>
            <span>{message.content}</span>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 bg-gray-100">
        <input
          type="text"
          name="message"
          placeholder="Type a message..."
          className="w-full p-2 rounded"
        />
      </form>
    </div>
  )
}