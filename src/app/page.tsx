"use client";
import ChatApp from "@/components/ChatApp";
import Image from "next/image";
import { motion } from 'framer-motion';
import AuthCard from "@/components/Auth/AuthCard";
import { useState } from "react";

export default function Home() {
    const [error, setError] = useState<string>('');
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <AuthCard error={error} />
            </motion.div>
        </div>
    );
}
