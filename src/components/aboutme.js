import React from "react";
import Avatar2 from "../images/20230820_225657.jpg";
import { Link } from "gatsby";

export default function AboutMe() {
  return (
    <div className="py-10 bg-white">
      <p className="text-3xl font-bold text-center">About Me</p>
      <div className="md:flex md:justify-center md:items-center grid grid-cols-1 md:space-x-16 md:text-left text-center my-6 mx-14">
        <div className="space-y-6">
          <div className="md:max-w-[200px]">
            <p className="font-bold font-cabin flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                hedight="14"
                width="15.75"
                viewBox="0 0 576 512"
                className="mr-1"
              >
                <path
                  fill="#74C0FC"
                  d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"
                />
              </svg>
              Study
            </p>
            <p className="">
              Currently pursuing a degree in Computer Science at
              <Link
                to="https://tlu.edu.vn/"
                target="_blank"
                className="text-sky-300 font-bold"
              >
                &nbsp;Thuy Loi University
              </Link>
            </p>
          </div>
          <div className="md:max-w-[200px]">
            <p className="font-bold font-cabin flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="14"
                viewBox="0 0 512 512"
                className="mr-1"
              >
                <path
                  fill="#f5bcf3"
                  d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                />
              </svg>
              Hobbies
            </p>
            <p>Watching anime, reading manga, drawing, programming</p>
          </div>
        </div>
        <div className="my-6">
          <img
            src={Avatar2}
            alt=""
            width={200}
            height={200}
            className="rounded-full border-4 border-yellow-200 mx-auto"
          />
        </div>
        <div className="space-y-6">
          <div className="md:max-w-[200px]">
            <p className="font-bold font-cabin flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="14"
                viewBox="0 0 512 512"
                className="mr-1"
              >
                <path
                  fill="#ffd257"
                  d="M493.7 .9L299.4 75.6l2.3-29.3c1-12.8-12.8-21.5-24-15.1L101.3 133.4C38.6 169.7 0 236.6 0 309C0 421.1 90.9 512 203 512c72.4 0 139.4-38.6 175.7-101.3L480.8 234.3c6.5-11.1-2.2-25-15.1-24l-29.3 2.3L511.1 18.3c.6-1.5 .9-3.2 .9-4.8C512 6 506 0 498.5 0c-1.7 0-3.3 .3-4.8 .9zM192 192a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm16 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"
                />
              </svg>
              Dream
            </p>
            <p>To become a mobile developer in the future</p>
          </div>
          <div className="md:max-w-[200px]">
            <p className="font-bold font-cabin flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="14"
                viewBox="0 0 512 512"
                className="mr-1"
              >
                <path
                  fill="#fe5858"
                  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                />
              </svg>
              Languages
            </p>
            <p>Vietnamese, English, Japanese</p>
          </div>
        </div>
      </div>
    </div>
  );
}
