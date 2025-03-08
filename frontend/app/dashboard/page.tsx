import React from "react"
import LawFirmDetails from "./components/LawfirmsDetails"
import PriceList from "./components/PriceList"

export default function page() {
  return (
    <div className="flex flex-col align-flex-start">
      <p className="text-2xl text-left mt-[30px] ml-[20px]">
        Law firms Details
      </p>
      <div className="flex direction-row gap-5 pt-[28px] pr-[44px] pb-[30px] pl-[20px]">
        <LawFirmDetails />
        <PriceList />
      </div>
    </div>
  )
}
