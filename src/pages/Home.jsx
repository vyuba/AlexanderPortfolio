// import { useState } from "react";
import ContactBtn from "../components/ContactBtn";
import Header from "../components/Header";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
        <Header/>
      <div className="grid gap-4 pb-20">
        <h1 className="text-4xl uppercase">hello i am alexander preye</h1>
        <img src="/assets/2024_05_14_15_48_IMG_8670 1.png" alt="" />
        <p className="text-sm">A software engineer with a strong passion for fostering connections between developers and cutting-edge technology. I specialize in crafting products and crafting technical articles. During my spare time, you&apos;ll often find me contributing to open-source projects or devising solutions for challenges I&apos;ve encountered in the past.</p>
      </div>
      <ContactBtn/>
    </div>
  )
}

export default Home