"use client"

import {useState} from "react"
import {Mail} from "lucide-react"
interface PriceOption {
  label: string
  duration: string
  price: number
}

const priceOptions: PriceOption[] = [
  {label: "30 Min", duration: "30 Min", price: 20},
  {label: "1 Hours", duration: "1 Hours", price: 20},
]

const PriceList: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("30 Min")

  return (
    <div className="bg-white rounded-2xl p-6 w-1/2 flex justify-between flex-col">
      <div className="space-y-4">
        {/* Total Cases and Active Cases */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-left">
            <span className="text-teal-500 text-2xl font-bold py-2.5">45</span>
            <span>Total Cases</span>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-left">
            <span className="text-teal-500 text-2xl font-bold py-2.5">45</span>
            <span>Active Cases</span>
          </div>
        </div>

        {/* Email Section */}
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-2">
          <Mail className="text-teal-500" />
          <span className="text-gray-500">Email</span>
          <span className="ml-auto bg-white px-3 py-2 rounded-xl border-gray-200">
            test@legistai.com
          </span>
        </div>

        <hr className="border-gray-200" />

        {/* Price List Section */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-md mb-2 py-2 font-bold">Select Price List</h3>
          <div className="space-y-2">
            {priceOptions.map((option) => (
              <label
                key={option.duration}
                className={`flex items-center justify-between p-4 rounded-lg cursor-pointer border ${
                  selectedOption === option.duration
                    ? "bg-white border-white"
                    : "bg-transparent border-transparent"
                }`}>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="priceOption"
                    value={option.duration}
                    checked={selectedOption === option.duration}
                    onChange={() => setSelectedOption(option.duration)}
                    className="form-radio text-teal-500"
                  />
                  <span className="text-gray-600">{option.label}</span>
                </div>
                <span className="text-white bg-[#3DBDBC] p-3 px-3 py-1 rounded-xl">
                  ${option.price}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Choose Law Firms & Confirm Button */}
      <div className="flex flex-col space-y-4 pt-2">
        <span className="text-gray-500 text-right text-sm">
          Choose Law Firms
        </span>
        <button className="text-white w-full bg-[#3DBDBC] p-2.5 rounded-xl">
          Confirm
        </button>
      </div>
    </div>
  )
}

export default PriceList
