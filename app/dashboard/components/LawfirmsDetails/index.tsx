import React from "react"
import {Star, MapPin} from "lucide-react"

interface LawFirmDetailsProps {
  name?: string
  rating?: number
  logoUrl?: string
  description?: string
  address?: string
  mapImageUrl?: string
}

const LawFirmDetails: React.FC<LawFirmDetailsProps> = React.memo(
  ({
    name = "Tran & Sorelle",
    rating = 4.5,
    logoUrl = "/t.s.png",
    description = "Eva Icons Is A Pack Of More Than 480 Beautifully Crafted Open Source Icons For Common Actions And Items. Download Our Set On The Desktop To Use Them In Your Digital Products For Web, IOS And Android. Compatible With",
    address = "C/ De Ganduxer, 70, Sarrià-Sant Gervasi, 08021 Barcelona, Spain",
    mapImageUrl = "/map.png",
  }) => {
    return (
      <article
        className="bg-white rounded-2xl p-6 w-1/2"
        aria-label={`Details for law firm ${name}`}>
        {/* Header with Logo and Rating */}
        <header className="flex items-center mb-4">
          <img
            src={logoUrl}
            alt={`${name} Logo`}
            className="w-[80px] h-[80px] rounded-lg object-cover"
          />
          <div className="ml-4">
            <h2 className="text-lg font-semibold">{name}</h2>
            <div className="flex items-center mt-1">
              <Star className="w-4 h-4 text-yellow-400" fill="gold" />
              <span className="text-sm bg-gray-100 px-2 py-1 rounded-full ml-2">
                {rating} Rating
              </span>
            </div>
          </div>
        </header>

        <hr className="my-4 border-gray-200" />

        {/* Brief Description */}
        <section className="bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="text-md font-medium mb-2">Brief Description</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </section>

        {/* Address */}
        <section className="bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="text-md font-medium mb-2">Address</h3>
          <p className="text-sm text-gray-600">{address}</p>
        </section>

        {/* Map Location */}
        <section className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-md font-medium mb-2">Map Location</h3>
          <div className="relative">
            <img
              src={mapImageUrl}
              alt={`Map showing location of ${name}`}
              className="w-full h-[117px] rounded-lg object-cover"
            />
            <button
              className="absolute bottom-4 right-4 bg-teal-500 text-white px-4 rounded-full shadow-lg flex items-center p-2"
              aria-label="View Map Location">
              <span className="mr-1">View Map</span>
              <MapPin className="w-4 h-4" />
            </button>
          </div>
        </section>
      </article>
    )
  }
)

export default LawFirmDetails
