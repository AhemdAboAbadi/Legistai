"use client"

import {ReactNode, useEffect} from "react"
import {useRouter} from "next/navigation"

type ProtectedRouteProps = {
  children: ReactNode
}

const ProtectedRoute = ({children}: ProtectedRouteProps) => {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token") // Example: check for auth token
    if (!isAuthenticated) {
      router.replace("/login") // Redirect to login if not authenticated
    }
  }, [router])

  return <>{children}</>
}

export default ProtectedRoute
