import {Search} from "lucide-react"

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-full py-3 px-5 w-full max-w-[679px]">
      <Search className="text-gray-500 w-5 h-5 mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none text-gray-500 w-full"
        aria-label="Search"
      />
    </div>
  )
}

export default SearchBar
