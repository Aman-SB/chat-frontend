'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useAuthStore from '@/stores/authStores'
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const router = useRouter()
  const { user, isAuthenticated, logout } = useAuthStore((state) => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    logout: state.logout
  }));

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard, {user?.username}!</h1>
      <p className="mb-4">Your email: {user?.email}</p>
      <Button onClick={logout}>Logout</Button>
    </div>
  )
}