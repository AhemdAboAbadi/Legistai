"use client"

import {ReactNode, useEffect, useState} from "react"
import {useRouter} from "next/navigation"

type AuthRouteProps = {
  children: ReactNode
}

const AuthRoute = ({children}: AuthRouteProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token")
    if (isAuthenticated) {
      router.replace("/dashboard")
    } else {
      setIsLoading(false)
    }
  }, [router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-20 h-20 bg-blue-600 rounded-full mb-4"></div>
          <p className="text-2xl font-bold text-blue-600">Loading...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export default AuthRoute
