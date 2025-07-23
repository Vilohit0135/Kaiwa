export default function InputField({label, type="text", placeholder}){
    return(
        <div className="mb-4">
            <lable className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </lable>
        <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
        </div>
    )
}