"use client"

import {AuthRoute} from "../../service/HOC"
import {useState} from "react"
import axiosInstance from "../../service/utilities/axiosInstance"
import {toast} from "react-toastify"
import {useRouter} from "next/navigation"
import InputField from "./components/InputField"
import Image from "next/image"

interface LoginResponse {
  token: string
  redirect: string
}

export default function LoginPage() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please fill in both email and password.")
      return
    }

    setIsLoading(true)
    try {
      const {data} = await axiosInstance.post<LoginResponse>("/login", {
        username: email,
        password: password,
      })

      localStorage.setItem("token", data.token)
      toast.success("Login successful", {
        onClose: () => router.push(data.redirect),
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthRoute>
      <div className="flex">
        <div className="flex bg-teal-500 w-1/2">
          <p className="text-white text-2xl p-20 m-auto">
            We are a software company that specializes in developing legal tools
            and products to support lawyers in their daily tasks. Our primary
            concentration is on U.S. immigration law, aiming to provide the
            necessary assistance to streamline their daily activities.
          </p>
        </div>
        <div className="flex items-center justify-center min-h-screen bg-white w-1/2">
          <div className="w-full max-w-md p-8">
            <div className="flex flex-col items-center m-7">
              <Image
                width={160}
                height={80}
                className="w-40 h-20"
                src="/logo.png"
                alt="Logo"
              />
              <p className="text-lg m-4">Sign into your account</p>
            </div>
            <div>
              <InputField
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <InputField
                label="Password"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <div className="flex justify-between items-center mb-6">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                className="w-full bg-teal-500 hover:bg-teal-300 text-white py-2 rounded-lg disabled:opacity-50"
                onClick={handleLogin}
                disabled={isLoading}
                aria-label="Sign In">
                {isLoading ? "Loading..." : "SIGN IN"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </AuthRoute>
  )
}
