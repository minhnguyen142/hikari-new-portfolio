import { Link } from "gatsby";
import React from "react";

export default function BlogNavigate() {
  return (
    <div className="bg-white py-24">
      <div className="overflow-hidden">
        <div className=" bg-[url('../images/firework.jpg')] bg-cover bg-center bg-no-repeat text-white py-12 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105">
          <div className="mx-auto text-center text-3xl font-pacifico font-light">
            <Link to="http://hikari13864.wordpress.com" target="_blank">
              Check out my blog here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
