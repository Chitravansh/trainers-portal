// components/StatsSection.tsx
import { FaUsers } from "react-icons/fa";
import { LuBriefcaseBusiness, LuBuilding2 } from "react-icons/lu";
import { BiBuildings } from "react-icons/bi";

export default function StatsSection() {
  return (
    <div className="flex flex-wrap justify-center gap-20 text-white px-4">
      <Stat icon = {<LuBriefcaseBusiness size={28} />} number="25,850" label="Trainings" />
      <Stat icon = {<FaUsers size={28}/> } number="10,250" label="Trainers" />
      <Stat icon = {<BiBuildings size= {28}/>} number="18,400" label="Organisations" />
    </div>
  );
}

function Stat({ icon, number, label }: {icon: React.ReactNode, number : string, label : string}) {
  return (
    <div className=" flex items-center gap-4 ">
       <div className=" w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center gap-4">
        {icon}
      </div>
      <div>
      <h2 className="text-3xl font-bold">{number}</h2>
      <p className="text-gray-300">{label}</p>
      </div>

    </div>
  );
}
