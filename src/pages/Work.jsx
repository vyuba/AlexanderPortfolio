// import React from 'react'
import { useState } from "react";
import Header from "../components/Header";
import ContactBtn from "../components/ContactBtn";

function Work() {
  const [open, setIsOpen] = useState(0);
  const handleclick = () => {
    // isOpen = true
    console.log("clicked");
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
        <Header/>
      <div>
        <h1 className="uppercase text-xl">ui/ux designs</h1>
        <div
          onClick={handleclick}
          className={`project mt-3 py-3 px-8 bg-accent-light dark:bg-accent-datk grid gap-2 ${
            !open ? "" : ""
          }`}
        >
          <p className="text-lg uppercase">E-Commerce Website Redesign</p>
          <p className="text-base capitalize">
            Redesigned the user interface for an existing e-commerce platform.
          </p>
          <ul className={`text-base capitalize list-disc pl-3 ${
            !open ? "hidden" : "block"
          }`}>
            <li>Conducted user research and analyzed competitor websites.</li>
            <li>
              Created wireframes and mockups for improved product pages,
              checkout process, and navigation.
            </li>
            <li>
              Implemented responsive design for seamless mobile experience.
            </li>
          </ul>
          <p className="text-base underline uppercase">
            {!open ? "click to expand" : "click to collapse"}
          </p>
          <div className={`w-full overflow-hidden flex flex-row gap-3 ${
            !open ? "hidden" : "block"
          }`}>
            <div className="w-[309px] h-[212px] bg-white"></div>
          </div>
        </div>
      </div>
      <ContactBtn/>
    </div>
  );
}

export default Work;
