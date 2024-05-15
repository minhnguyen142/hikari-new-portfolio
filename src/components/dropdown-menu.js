import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "gatsby";

export default function DropdownMenu() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 p-1.5 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFFJREFUSEvtlEkKADAIA83/H52eu1APZQShnquTBaqAR/D9+IA04fqIbDuVdXkgaRK9OcABL+pPu/Ud4A7wDnAAHlF/AN4BDujfwXewJoD/pgNrVBgZX2h0sgAAAABJRU5ErkJggg=="
              alt="menu"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-00 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/about/">
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      About
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/works/">
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Works
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to="https://github.com/minhnguyen142/hikari-new-portfolio">
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAt5JREFUSEu1lU2IVmUUx///+3y4UVqUhLg0welDSKKFMKAoiLpxDPogKIiMtBCGSCdhUAY/MEFGxA/MnVEDUTOb3NmiRQVRFKUFibhwkUa4mEHonHvvce7wXLnvHd95X4N5Nvc+zz3n/J5znuf8L7HIg4scH70AIca4w8y2AngOwGpgzucmgF9JXhaRLwFot412BXjvN2dZdg7AUz2yvFGW5Tt5nl95mN1DAd77/SSPkeyV4VxMMyvNbCTP8xNtyLwA3vt9WZYd/z9nY2bDqjre9O0AeO83krySdl7V960Y424zGyWZAbie6j1Q7ZrkURE5G2M8DeCllMlgnuff1ZAmYEmM8SqAVenjmIgcTO/VOdwGMJ3mSwGsAPBXNffeH8iy7Ej6dk1E1gIoqvkDQIzxFQATNdnMxlV1uJ9SxRg/BvBhbVsUxfaiKC53AEIIn5J8vTYqy3J9nuff9wlYa2a/1JfCzM6o6vvtDKryPN1I85l+gtc2IYSfSK5Lt+pHVX2xncEdksuTw5SIDD0i4DOSryXAv6r6RBvwN8knk8E3qrrpUQAxxq8BbEv+M6q6rA34meTzyWBaVR9fSAJa8BBC+IfkY2n9TxEZaAM+Ifl24xbtUtWL/WQRQthF8kLD95KqvtEBcM4NOee+MrO7JGfMbEVq/0qP7nUBLfXev1c1XGrE2uxlEfmiA1D1RNVoZrYSwBYA75J808wkqearAP5LESqVnTSzLSR9C/6HiDwLoGwD4Jzb6Zyr5PeWiLwQQpggucHMzqnqnmagEMLnJCtoxyiKYqgoiql6cZ7YhRBOkdxbluVonueHu51BjPHQrJDWUjJnZmYnVfWDpk83uR7NsmzMzL6dFbHfAPyuquebjjHGsVm9Ga3XyrLc15dc1w7e+0GS46k7j4vISAtwdPZMPjKzHwBUMl09541ePxQ653Y4566LSJVJc6xxzg0URTG50FXuBeinDRa0WXTAfc6jOyhGH/18AAAAAElFTkSuQmCC"
                        className="mx-0.5"
                        width={18}
                        height={18}
                        alt="github"
                      />
                      Source
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
