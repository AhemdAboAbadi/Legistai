import {ChangeEvent} from "react"

interface InputFieldProps {
  label: string
  id: string
  type: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const InputField = ({
  label,
  id,
  type,
  value,
  onChange,
  placeholder,
}: InputFieldProps) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1" htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-300"
      placeholder={placeholder}
      required
    />
  </div>
)

export default InputField
