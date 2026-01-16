// components/SearchBar.tsx
export default function SearchBar() {
  return (
    <div className="bg-white shadow-lg
        rounded-2xl
        max-w-md 
        mx-4 md:mx-auto
        p-6
        flex flex-col gap-4
        md:flex-row md:items-center md:gap-0
        md:max-w-4xl md:p-0 md:rounded-lg">
      
      {/* Training Title */}
      <input
        placeholder="Training Title or Company"
        className="flex-1 px-4 py-4 outline-none text-black"
      />

      {/* Location */}
      <select className="px-4 py-4 outline-none text-gray-600 border-l">
        <option value="">Select Location</option>
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
        <option value="bangalore">Bangalore</option>
      </select>

      {/* Category */}
      <select className="px-4 py-4 outline-none text-gray-600 border-l">
        <option value="">Select Category</option>
        <option value="web">Web Development</option>
        <option value="mobile">Mobile Development</option>
        <option value="ai">AI / ML</option>
        <option value="cloud">Cloud Computing</option>
      </select>

      {/* Button */}
      <button className=" mt-2
          bg-teal-500
          text-white font-semibold
          py-4
          rounded-lg
          hover:bg-teal-600
          transition
          md:mt-0 md:px-6 md:rounded-none md:rounded-r-lg">
        Search Training
      </button>
    </div>
  );
}
