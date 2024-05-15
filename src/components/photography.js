import React from "react";
import "../styles/global.css";
import Photo1 from "../images/20230803_144839.jpg";
import Photo2 from "../images/20221231_163852.jpg";

export default function Photography() {
  return (
    <div className="py-40 space-y-4">
      <p className="text-xl font-bold text-center">Photography</p>
      <p className="text-center">
        I want to store the beauty of the world around me by taking photos
      </p>
      <div className="md:grid md:grid-cols-2 flex flex-col justify-center items-center md:space-x-4 space-y-8 md:space-y-0">
        <img
          src={Photo1}
          alt="photo1"
          width={300}
          height={300}
          className="photography"
        />
        <img
          src={Photo2}
          alt="photo2"
          width={300}
          height={300}
          className="photography"
        />
      </div>
      <p className="text-gray-400 italic text-center pt-4">More coming soon...</p>
    </div>
  );
}
