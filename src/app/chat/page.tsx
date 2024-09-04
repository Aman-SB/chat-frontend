"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import ChatArea from "../../components/ChatArea";
import useAuthStore from "@/stores/authStores";
import { Button } from "@/components/ui/button";

export default function ChatPage() {
    const [selectedContact, setSelectedContact] = useState<any>(null);
    const { user, logout } = useAuthStore((state) => ({
        user: state.user,
        logout: state.logout
      }));

    return (
        <div className="flex h-screen">
            <Sidebar onSelectContact={setSelectedContact} />
            <div className="flex-1 flex flex-col">
                <header className="bg-gradient-to-r from-blue-400 to-purple-500 text-white p-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Chat App</h1>
                    <div>
                        <span className="mr-4">Welcome, {user?.username}</span>
                        <Button
                            onClick={logout}
                            className=" text-white px-4 py-2 rounded"
                            variant={"destructive"}
                        >
                            Logout
                        </Button>
                    </div>
                </header>
                <ChatArea selectedContact={selectedContact} />
            </div>
        </div>
    );
}
