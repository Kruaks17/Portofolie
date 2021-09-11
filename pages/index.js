import React, {useState} from 'react';
import { motion } from 'framer-motion';


export default function Home() {
  

  return (
    <>
      <title>Portofolie</title>
      <div className="header-content">
        <div className="logo">AK-J</div>
        <ul className="menu">
          <motion.h2
          >Menu</motion.h2>
          <button className="contact-btn">Contact</button>
        </ul>
      </div>
      <motion.ul className="popUp"
      >
            <h2>Work</h2>
            <h2>About</h2>
        </motion.ul>
      <section className="ingress">
        <h2>Designer + Front-End Developer</h2>
        <h1 className="overskrift">Aksel<br></br>Kruse-Jensen</h1>
      </section>
      <section className="about-me">
        <p>I'm Aksel, designer + front-end developer
        currently looking for a job.<br></br><br></br>
        At the moment I take pride in building and developing
        digital design, building websites, brand indetity, editorial design + packaging design.
       <br></br><br></br>
        Interested in working together? <br></br>
        Let me know!
       </p>
        <button className="mailbtn">Send mail</button>
      </section>
    </>
  )
}
