// 'use client'

// import { useEffect } from 'react'
// import { useRouter, usePathname } from 'next/navigation'
// import useAuthStore from '@/stores/authStores'
// import { Inter } from 'next/font/google'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const router = useRouter()
//   const pathname = usePathname()
//   const { isAuthenticated, checkAuthStatus } = useAuthStore((state) => ({
//     isAuthenticated: state.isAuthenticated,
//     checkAuthStatus: state.checkAuthStatus,
//   }))

//   useEffect(() => {
//     checkAuthStatus()
//   }, [checkAuthStatus])

//   useEffect(() => {
//     if (isAuthenticated && pathname === '/') {
//       router.push('/chat')
//     } else if (!isAuthenticated && pathname !== '/' && pathname !== '/terms' && pathname !== '/privacy') {
//       router.push('/')
//     }
//   }, [isAuthenticated, pathname, router])

//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }


'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import useAuthStore from '@/stores/authStores'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const { isAuthenticated, checkAuthStatus } = useAuthStore()

  useEffect(() => {
    checkAuthStatus()
  }, [checkAuthStatus])

  useEffect(() => {
    if (isAuthenticated && pathname === '/') {
      router.push('/chat')
    } else if (!isAuthenticated && pathname !== '/' && pathname !== '/terms' && pathname !== '/privacy') {
      router.push('/')
    }
  }, [isAuthenticated, pathname, router])

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}