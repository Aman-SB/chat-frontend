import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import useAuthStore from '@/stores/authStores'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const { isAuthenticated, checkAuthStatus } = useAuthStore((state) => ({
    isAuthenticated: state.isAuthenticated,
    checkAuthStatus: state.checkAuthStatus,
  }))

  useEffect(() => {
    // Fetch auth status when component mounts
    checkAuthStatus()
  }, [checkAuthStatus])

  useEffect(() => {
    // Redirect if not authenticated and not on login or register pages
    if (!isAuthenticated && pathname !== '/login' && pathname !== '/register') {
      router.push('/login')
    }
  }, [isAuthenticated, pathname, router])

  return <>{children}</>
}
