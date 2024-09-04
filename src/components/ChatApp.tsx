"use client";
import { useState } from "react";
import { Contact, Message } from "../types/types";
import ContactList from "@/components/ContanctList";
import ChatHeader from "@/components/ChatHeader";
import MessageList from "@/components/MessageList";
import MessageInput from "@/components/MessageInput";

// Sample data
const contacts: Contact[] = [
    {
        id: 1,
        name: "Alice Smith",
        avatar: "/placeholder.svg?height=40&width=40",
        lastMessage: "Hey, how's it going?",
        lastMessageTime: "10:30 AM",
    },
    {
        id: 2,
        name: "Bob Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        lastMessage: "Can we meet tomorrow?",
        lastMessageTime: "Yesterday",
    },
    {
        id: 3,
        name: "Carol Williams",
        avatar: "/placeholder.svg?height=40&width=40",
        lastMessage: "Thanks for your help!",
        lastMessageTime: "Tuesday",
    },
];

const initialMessages: Message[] = [
    { id: 1, senderId: 1, text: "Hey, how's it going?", timestamp: "10:30 AM" },
    {
        id: 2,
        senderId: 0,
        text: "Hi Alice! I'm doing well, thanks. How about you?",
        timestamp: "10:32 AM",
    },
    {
        id: 3,
        senderId: 1,
        text: "I'm great! Just wanted to catch up.",
        timestamp: "10:33 AM",
    },
];

export default function ChatApp() {
    const [selectedContact, setSelectedContact] = useState<Contact | null>(
        contacts[0]
    );
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim() !== "") {
            const newMsg: Message = {
                id: messages.length + 1,
                senderId: 0, // Assuming 0 is the current user
                text: newMessage,
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
            };
            setMessages([...messages, newMsg]);
            setNewMessage("");
        }
    };

    return (
        <div className="flex h-[600px] max-w-4xl mx-auto border rounded-lg overflow-hidden">
            <ContactList
                contacts={contacts}
                selectedContact={selectedContact}
                setSelectedContact={setSelectedContact}
            />
            <div className="flex-1 flex flex-col">
                {selectedContact && (
                    <>
                        <ChatHeader contact={selectedContact} />
                        <MessageList messages={messages} />
                        <MessageInput
                            newMessage={newMessage}
                            setNewMessage={setNewMessage}
                            handleSendMessage={handleSendMessage}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
