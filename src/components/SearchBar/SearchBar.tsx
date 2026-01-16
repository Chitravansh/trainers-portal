// components/SearchBar.tsx
export default function SearchBar() {
  return (
    <div className="flex bg-white rounded-lg overflow-hidden max-w-4xl mx-auto shadow-lg">
      
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
      <button className="bg-teal-500 px-6 text-white font-semibold hover:text-cyan-300">
        Search Training
      </button>
    </div>
  );
}
