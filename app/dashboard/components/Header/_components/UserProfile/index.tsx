import Image from "next/image"
import React from "react"

interface UserProfileProps {
  name?: string
  role?: string
  imageUrl?: string
}

const UserProfile: React.FC<UserProfileProps> = React.memo(
  ({
    name = "Majd Malki",
    role = "Product Manager",
    imageUrl = "/person.png",
  }) => {
    return (
      <div
        className="flex items-center bg-gray-100 rounded-full p-2 cursor-pointer"
        aria-label={`User profile for ${name}, role: ${role}`}
        role="button"
        tabIndex={0}>
        <Image
          src={imageUrl}
          alt={`${name}'s profile picture`}
          width={32}
          height={32}
          className="w-8 h-8 rounded-full mr-2"
        />
        <div className="flex flex-col">
          <span className="text-gray-700 font-semibold">{name}</span>
          <span className="text-xs text-gray-500">{role}</span>
        </div>
      </div>
    )
  }
)

UserProfile.displayName = "UserProfile"

export default UserProfile
