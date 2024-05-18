// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [today, setDate] = useState(new Date());
  setInterval(() => {
    // Update the current date every minute
    setDate(new Date());
  }, 60 * 1000);
  const hour = today.getHours();
  const minutes = today.getMinutes();
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-base capitalize">alexander preye / lobby</p>
        <p className="text-sm capitalize border border-text-light dark:border-text-dark py-[5px] px-[10px] dark:bg-accent-datk">
          {hour} : {minutes} EAT{" "}
        </p>
      </div>
      <div className="flex justify-between items-center py-5">
        <Link to={"/about"}>
          <button className="uppercase text-lg underline">about</button>
        </Link>
        <Link to={"/work"}>
          <button className="uppercase text-lg underline">works</button>
        </Link>
      </div>
    </>
  );
}

export default Header;
