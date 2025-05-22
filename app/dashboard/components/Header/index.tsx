import React from "react"
import {
  LanguageSelector,
  NotificationBell,
  UserProfile,
  SearchBar,
} from "./_components"

const Header: React.FC = React.memo(() => {
  return (
    <header
      className="flex items-center justify-between bg-white py-7 pr-11"
      role="navigation">
      <SearchBar />
      <div className="flex items-center gap-4">
        <LanguageSelector />
        <NotificationBell />
        <UserProfile />
      </div>
    </header>
  )
})

export default Header
