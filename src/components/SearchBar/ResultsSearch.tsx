"use client";

import {useState} from "react";
import { FaSearch } from "react-icons/fa";

export default function ResultsSearch(){
    const[query,setQuery] = useState("");
    return (
        <div className="flex justify-center mb-6">
            <div className="relative  w-full max-w-xl">
            <input
            type ="text"
            placeholder ="Search training or skill (e.g.  React, Flutter)"

            value = {query}
            onChange={(e)=>setQuery(e.target.value)}
            className="
            w-full max-w-xl
            px-4 py-4
            rounded-lg
            border 
            outline-none
            focus:ring-2 focus:ring-teal-500
            placeholder:text-xs
            sm:placeholder:text-sm
            md:placeholder:text-base"
            />
            <button 
            // onClick={/**handleSearch */}
            className="
            absolute right-3 top-1/2 -translate-y-1/2
            text-gray-500 hover:text-teal-500 
            ">
                <FaSearch size={18} />
            </button>
            </div>
            
        </div>
    )
}