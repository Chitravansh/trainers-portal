import RequestCard from "./RequestCard";

export default function TrainingRequests() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Training Requests</h3>

      {Array.from({ length: 3 }).map((_, i) => (
        <RequestCard key={i} />
      ))}
    </div>
  );
}
