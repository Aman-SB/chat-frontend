import { useState, useEffect } from 'react'
import axios from 'axios'

interface Contact {
  id: string
  username: string
}

export default function Sidebar({ onSelectContact }: { onSelectContact: (contact: Contact) => void }) {
  const [contacts, setContacts] = useState<Contact[]>([])

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/contacts')
        setContacts(response.data)
      } catch (error) {
        console.error('Failed to fetch contacts:', error)
      }
    }
    fetchContacts()
  }, [])

  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="cursor-pointer p-2 hover:bg-gray-200"
            onClick={() => onSelectContact(contact)}
          >
            {contact.username}
          </li>
        ))}
      </ul>
    </div>
  )
}