import { Link } from "gatsby";
import React from "react";

export default function WhatIMade() {
  return (
    <div className="bg-white py-24">
      <p className="text-3xl font-bold text-center">What I Made</p>
      <p className="text-center">
        I want to create something that I can be proud of
      </p>
      
      <p className="text-center text-gray-400 italic my-6">Coming Soon...</p>

      <div className="flex justify-center mt-10">
        <Link to="/works/">
          <button className="border-2 border-violet-500 hover:bg-violet-500 text-violet-500 hover:text-white font-bold py-2.5 px-8 rounded-2xl hover:ease-in transition duration-150">
            Explore all
          </button>
        </Link>
      </div>
    </div>
  );
}
