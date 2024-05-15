import React from "react";
import Avatar from "../images/Picsart_24-02-07_14-06-59-108.jpg";
import { Link } from "gatsby";

export default function Landing() {
  return (
    <div className="md:flex md:justify-center py-48 px-10 text-white min-h-screen">
      <div className="md:flex md:items-center md:space-x-24">
        <div className="flex flex-col my-10 justify-center items-center md:items-baseline space-y-4">
          <p className="flex items-end text-3xl space-x-2 font-bold">
            Meet&nbsp;
            <p className="font-pacifico text-5xl bg-gradient-to-r from-violet-400 via-sky-200 to-cyan-400 bg-clip-text text-transparent font-normal">
              Hikari
            </p>
            <p className="scale-150">🎆</p>
          </p>
          <p className="text-2xl text-center md:text-left font-bold">
            A passionate front-end and mobile developer
          </p>
          <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-3.5 px-8 rounded-2xl hover:ease-in transition duration-150">
            <Link
              to="mailto:minhnguyen13864@gmail.com"
              className="flex items-center"
            >
              Contact me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height={20}
                width={20}
                className="ml-3"
              >
                <path
                  fill="#6fdbf6"
                  d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                />
              </svg>
            </Link>
          </button>
        </div>
        <div className="flex justify-center md:block">
          <img
            src={Avatar}
            alt=""
            width={300}
            height={300}
            className="rounded-md border-yellow-200 border-4"
          />
        </div>
      </div>
    </div>
  );
}
