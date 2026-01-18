export default function TrainerOverview() {
  return (
    <div className="bg-white text-black rounded-xl p-6 space-y-6">

      <section>
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-gray-700 mt-2">
          Experienced mobile trainer with 8+ years...
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Experience</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li>Trained 100+ corporate batches</li>
          <li>Worked with fintech & edtech clients</li>
        </ul>
      </section>

        <div className="flex justify-end">
        <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-300 transition" >
          Edit
        </button>
        </div>

    </div>
  );
}
