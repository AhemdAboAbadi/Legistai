import React from "react"
import {Bell} from "lucide-react"

const NotificationBell: React.FC = React.memo(() => {
  return (
    <div
      className="relative bg-gray-100 p-2 rounded-full cursor-pointer"
      aria-label="Notifications"
      aria-live="polite">
      <Bell className="w-6 h-6 text-gray-500" fill="black" />
      <span
        className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"
        aria-label="New notifications"></span>
    </div>
  )
})

NotificationBell.displayName = "NotificationBell"

export default NotificationBell
