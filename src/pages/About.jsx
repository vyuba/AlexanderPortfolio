// import React from 'react'

import ContactBtn from "../components/ContactBtn";
import Header from "../components/Header";

function About() {
  return (
    <div>
        <Header/>
      <div className="grid gap-4 pb-20">
        <h1 className="text-4xl uppercase">
          hello i am alexander preye a frontend developer and ui/ux designer
        </h1>
        <p className="text-sm">
          Hey 👋🏼, with over half a decade years of experience in building
          products that runs on the web. Lately, you&apos;ll find me either learning a new programming language or watching anime 🙌🏼 I believe constant learning and improvement are the
          catalysts of personal and professional growth, and they can empower an
          individual to adapt to change, overcome challenges, and unlock their
          full potential, so I&apos;m always learning to become the finest version of
          myself. My career started in secondary school club, and so I&apos;m a huge
          fan of building with developer communities. Oftentimes, you&apos;ll find me
          either leading a program or participating as one of the organizers to
          help create a good experience for developer-focused events.
        </p>
        <div className="grid gap-3">
            <p className="uppercase text-lg">skills and technologies</p>
        <ul className="uppercase list-disc pl-5">
            <li className="text-sm">html</li>
            <li className="text-sm">css</li>
            <li className="text-sm">tailwind css</li>
            <li className="text-sm">bootstrap</li>
            <li className="text-sm">javascript</li>
            <li className="text-sm">vite</li>
            <li className="text-sm">framer motion</li>
        </ul>
        </div>
        <div className="grid gap-2">
            <h1 className="text-lg uppercase">lets collaborate</h1>
            <p className="text-sm capitalize">I&apos;m always on the lookout for exciting new projects and opportunities to collaborate with fellow creatives and innovators. Whether you&apos;re a startup looking to bring your vision to life or an established company seeking to elevate your digital presence, I&apos;d love to hear from you. Let&apos;s work together to turn your ideas into reality!</p>
        </div>
      </div>
      <ContactBtn/>
    </div>
  );
}

export default About;
