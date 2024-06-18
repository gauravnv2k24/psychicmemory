"use client";

// Components and packages
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SideBar } from "./SideBar";
import { Pages } from "./Pages";

// styles
import "./css/navbar.css";

// Navbar component of the application
export function NavBar() {
  // sets side bar initially hidden
  const [sidebar, setSideBar] = useState(false);
  return (
    <>
      <nav className="flex items-center p-2 justify-between border-b ">
        {/* this section appears on large screens */}
        <section className="items-center hidden lg:flex md:flex sm:flex">
          {/* menu */}
          <i
            className="fas fa-bars mx-2 text-gray-500"
            // toggles side bar on click
            onClick={() => {
              setSideBar((sidebar) => !sidebar);
            }}
          ></i>

          {/* logo section */}
          <h1 className="style-text text-sm flex items-center ml-3">
            <Image
              src="https://img.icons8.com/nolan/64/idea.png"
              alt=""
              width="24"
              height="24"
            />
            Psychic Memory
          </h1>
        </section>

        {/* this section appears on mobile screen */}
        <button className="appear-on-mobile">
          <i
            className="fas fa-bars mx-2 text-gray-500 "
            // toggles side bar on click
            onClick={() => {
              setSideBar((sidebar) => !sidebar);
            }}
          ></i>
        </button>
        {/* logo section */}
        <h1 className="style-text text-sm flex items-center ml-3 appear-on-mobile">
          <Image
            src="https://img.icons8.com/nolan/64/idea.png"
            alt=""
            width="24"
            height="24"
          />
          Psychic Memory
        </h1>

        {/* links for navigations */}
        <ul className="flex items-center text-xs style-text flex-wrap">
          {Pages.map((page, index) => (
            <li
              className="items-center additional-link mr-5"
              key={page.title + index}
            >
              <Link href={page.url}>{page.title}</Link>
            </li>
          ))}

          {/* search section */}
          <li>
            <i
              className="fas fa-search bg-black text-white p-2 rounded mr-5"
              id="search-btn"
            ></i>
          </li>

          {/* account section */}
          {/* <li className="text-blue-500 mr-5 ">Account</li> */}
        </ul>
      </nav>
      {/* side bar is used when there is no space for additional links and toggled when clicked on menu icon */}
      {sidebar && <SideBar />}
    </>
  );
}
