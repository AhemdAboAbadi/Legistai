// import {
//   LayoutDashboard,
//   Folder,
//   User,
//   Calendar,
//   FileText,
//   Settings,
//   LogOut,
// } from "lucide-react"

// const Sidebar = () => {
//   return (
//     <div className="flex flex-col h-screen bg-white w-[324px] pl-[44px] pr-[30px] pt-[37px] pb-[30px]">
//       <div className="flex items-center mb-8">
//         <img src="/logo.png" alt="LegistAI Logo" className="h-10 w-auto" />
//       </div>

//       <nav className="flex-1">
//         <ul className="space-y-3.5">
//           <li className="flex items-center px-[20px] py-[17px] bg-black text-white rounded-[40px]">
//             <LayoutDashboard className="mr-3 w-5 h-5" fill="#3DBDBC" />
//             <span>Dashboard</span>
//           </li>
//           <li className="flex items-center px-[20px] py-[17px] text-gray-600 hover:bg-gray-200 rounded-[40px]">
//             <Folder className="mr-3 w-5 h-5" />
//             <span>Drive</span>
//           </li>
//           <li className="flex items-center px-[20px] py-[17px] text-gray-600 hover:bg-gray-200 rounded-[40px]">
//             <User className="mr-3 w-5 h-5" />
//             <span>Profile</span>
//           </li>
//           <li className="flex items-center px-[20px] py-[17px] text-gray-600 hover:bg-gray-200 rounded-[40px]">
//             <Calendar className="mr-3 w-5 h-5" />
//             <span>Calendar</span>
//           </li>
//           <li className="flex items-center px-[20px] py-[17px] text-gray-600 hover:bg-gray-200 rounded-[40px]">
//             <FileText className="mr-3 w-5 h-5" />
//             <span>Law Firm Options</span>
//           </li>
//           <li className="flex items-center px-[20px] py-[17px] text-gray-600 hover:bg-gray-200 rounded-[40px]">
//             <Settings className="mr-3 w-5 h-5" />
//             <span>Settings</span>
//           </li>
//         </ul>
//       </nav>

//       <button className="mt-auto flex items-center px-[20px] py-[17px] bg-[#F7F8FA] rounded-[40px]">
//         <LogOut className="mr-3 w-5 h-5" />
//         <span>Log Out</span>
//       </button>
//     </div>
//   )
// }

// export default Sidebar

"use client"

import {
  LayoutDashboard,
  Folder,
  User,
  Calendar,
  FileText,
  Settings,
  LogOut,
} from "lucide-react"
import {useRouter} from "next/navigation"

const Sidebar = () => {
  const router = useRouter()

  const handleLogout = () => {
    // Clear the authentication token (localStorage or sessionStorage)
    localStorage.removeItem("token")
    // Redirect to the login page using Next.js router
    router.push("/login")
  }

  return (
    <div className="flex flex-col h-screen bg-white w-[324px] pl-[44px] pr-[30px] pt-[37px] pb-[30px]">
      <div className="flex items-center mb-8">
        <img src="/logo.png" alt="LegistAI Logo" className="h-10 w-auto" />
      </div>

      <nav className="flex-1">
        <ul className="space-y-3.5">
          <li className="flex items-center px-[20px] py-[17px] bg-black text-white rounded-[40px]">
            <LayoutDashboard className="mr-3 w-5 h-5" fill="#3DBDBC" />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center px-[20px] py-[17px] text-gray-600 hover:bg-gray-200 rounded-[40px]">
            <Folder className="mr-3 w-5 h-5" fill="black" />
            <span>Drive</span>
          </li>
          <li className="flex items-center px-[20px] py-[17px] text-gray-600 hover:bg-gray-200 rounded-[40px]">
            <User className="mr-3 w-5 h-5" fill="black" />
            <span>Profile</span>
          </li>
          <li className="flex items-center px-[20px] py-[17px] text-gray-600 hover:bg-gray-200 rounded-[40px]">
            <Calendar className="mr-3 w-5 h-5" fill="black" />
            <span>Calendar</span>
          </li>
          <li className="flex items-center px-[20px] py-[17px] text-gray-600 hover:bg-gray-200 rounded-[40px]">
            <FileText className="mr-3 w-5 h-5" fill="black" />
            <span>Law Firm Options</span>
          </li>
          <li className="flex items-center px-[20px] py-[17px] text-gray-600 hover:bg-gray-200 rounded-[40px]">
            <Settings className="mr-3 w-5 h-5" fill="black" />
            <span>Settings</span>
          </li>
        </ul>
      </nav>

      <button
        className="mt-auto flex items-center px-[20px] py-[17px] bg-[#F7F8FA] rounded-[40px] cursor-pointer"
        onClick={handleLogout}>
        <LogOut className="mr-3 w-5 h-5" />
        <span>Log Out</span>
      </button>
    </div>
  )
}

export default Sidebar
