import {ProtectedRoute} from "../../frontend/service/HOC"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-[#ffffff] border-r-2">
          <Header />
          <div
            className="rounded-tl-[20px] bg-gray-100"
            style={{
              minHeight: "calc(100vh - 116px)",
            }}>
            {children}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
