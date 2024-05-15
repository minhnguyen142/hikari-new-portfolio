import React from "react";
import { Link } from "gatsby";
import DropdownMenu from "./dropdown-menu";
import Logo from "../images/logo.jpg";


export default function Header() {
  return (
    <header className="fixed p-4 w-full z-20 bg-sky-400">
      <div className="flex items-center mx-auto max-w-7xl text-white">
        <div className="font-bold text-xl">
          <Link
            href="/"
            className="flex items-center space-x-2"
          >
            <img
              src={Logo}
              alt="logo"
              width={30}
              height={30}
              className="rounded-full border-2 border-yellow-200"
            ></img>
            <p className="md:block hidden">Khủng Long 3 Sừng</p>
          </Link>
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-end md:space-x-10">
          <Link
            to="/about/"
            className="hover:text-blue-800 hover:ease-in transition duration-100"
          >
            About
          </Link>
          <Link
            to="/works/"
            className="hover:text-blue-800 hover:ease-in transition duration-100"
          >
            Works
          </Link>
          <Link
            to="https://github.com/minhnguyen142/hikari-new-portfolio"
            className="flex items-center hover:text-blue-800 hover:ease-in transition duration-100"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAypJREFUSEvFlt2LV3UQxj+PgpAXYlimxvqyWOAmq9iLrfgHLAa25kUX0faCmlcqC3ohGCwFQUkhwlItmpIXEpRCIHjthdYWmvYCgallK5giQqGW+XTmx/ltZ797zu7Z9WIHDvzO+c3M8535zjwzYpJEk4TLuIBtTwGeAVqBudCwvwJcBE5J+rduILWAbS8AdgLrgVkVzm8AnwPvSPplrAOMCmx7GrAL2AHE7zpyF3g3y0avpL+rDCqBbUcqv8yeJ+uglegMAF2SBsvsS4FtLwROAnMmCNo0C9BVki6lfkYA234Q+Ap4LFc+nxdRFFQdCZA7wOO58k9Ah6SbReMy4APAKwWlTknHba8A3gOeAMJZPHGf8b4EiAP2SBqwvRo4UfDRn6V8UyWw7ZXRFklYiyRFu9QW23FF0WZNMbBU0o/ND8Mitn0IeClBWC7pu9qogO024IfEZp+kDSOAbU8FrgEzCwZX85P+MU7gGflVzCvYDUp6tAz4KSBaoChbJO0dD+hQbu24048S2zZJURv/U6btLuBIotgq6cIEgSPa3xPbtZKCG4YBR/77E8V5kopFUvsMtqcDf1VlcKi4bG8EPk4Ul0k6WxutWMZ2C/BrYrtd0u404hdyki/qvi7pkwkCPw8cTWxflXQwBQ4SGOqz3OBYRgjPTRD4C2BdYvu0pG+GAceL7WindOx1S/p0POC2u4FGZAX5M1q1ObNTAvkwY5w3gH+y0wZpRIuF7AfelJRW6TDP+XDpBQI4lQPZsHit+TEFLjLOVuB03mKRhXvAt8D7kg4XvdruBN4Ggs+rRm27pHOlwHm6PwC25QodwCPAZ4VFYASF2n4YCJarkj2Smj4bOmXT6YF8ULRn+1WjuHLHLwO3JfWVec/aMa6hSJFNtTP5TL5VtKtaBOYDX+fRbo7+lhQTplJsB8PFAlGUWASelfRbajja6hNOjuWzNiryZ6Ali3h2RcRBFkEaTfk+O/yaMtDSVCdFE7QXVdoDxGp7XdJDFcBBrTGHoyNiYXhL0u2qFNVdbyOSSPnibLq8WAEcfXsZ6Bur7caMeLQ7vd//akV8vyBl9pMG/B/cVwgukHh1IAAAAABJRU5ErkJggg=="
              width={20}
              height={20}
              className="mx-1"
              alt=""
            />
            Source
          </Link>
        </div>
        <div className="md:hidden flex flex-1 justify-end">
          <DropdownMenu />
        </div>
      </div>
    </header>
  );
}
