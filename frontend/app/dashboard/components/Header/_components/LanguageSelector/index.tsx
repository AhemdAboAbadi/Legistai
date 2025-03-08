import React from "react"

const LanguageSelector: React.FC = React.memo(() => {
  return (
    <button
      className="flex items-center bg-gray-100 rounded-full p-2 cursor-pointer"
      aria-label="Select Language">
      <img
        src="/flag.png"
        alt="US Flag"
        className="w-5 h-5 rounded-full mr-2"
      />
      <span className="text-gray-600" aria-hidden="true">
        ENG
      </span>
      <span className="ml-1 text-gray-500" aria-hidden="true">
        ▼
      </span>
    </button>
  )
})

export default LanguageSelector
