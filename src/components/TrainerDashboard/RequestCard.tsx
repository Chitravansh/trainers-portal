export default function RequestCard() {
  return (
    <div className="bg-white text-black rounded-xl p-4 space-y-2">

      <h4 className="font-semibold">Flutter Training</h4>
      <p className="text-sm text-gray-600">30 days · Remote</p>
      <p className="font-bold">₹4,50,000</p>

      <div className="flex gap-2 mt-3">
        <button className="bg-teal-500 text-white px-3 py-1 rounded">
          Accept
        </button>
        <button className="border px-3 py-1 rounded">
          Decline
        </button>
      </div>
    </div>
  );
}
