"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useState } from "react";

export default function AvailabilityManager() {
  const [availableDates, setAvailableDates] = useState<Date[]>([]);

  return (
    <div>
      <h4 className="font-semibold mb-2">Manage Availability</h4>

      {/* <DayPicker
        mode="multiple"
        selected={availableDates}
        onSelect={setAvailableDates}
      /> */}
      <DayPicker 
        mode="multiple"
        required={false} 
        selected={availableDates}
        // onSelect={setAvailableDates} 
         onSelect={(dates) => setAvailableDates(dates ?? [])}/>

      <p className="text-xs text-gray-600 mt-2">
        Click dates to mark availability
      </p>
    </div>
  );
}
