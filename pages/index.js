import Image from 'next/image';

export default function Home() {
  return (
    <>
      <title>Portofolie</title>
      <div className="header-content">

        <div className="logo">AK-J</div>

            <ul className="menu">

              <h2>Works</h2>

              <h2>About</h2>

              <button className="contact-btn">Contact</button>

            </ul>
      </div>
      <section className="ingress">
        <h2>Designer + Front-End Developer</h2>
        <h1 className="overskrift">Aksel<br></br>Kruse-Jensen</h1>
      </section>
      <section className="about-me">
        <p>I'm Aksel, designer + front-end developer
        currently looking for a job.<br></br><br></br>
        At the moment I take pride in building and developing
        digital design, brand indetity, editorial design + packaging design.
       <br></br><br></br> 
        Interested in working together? <br></br><br></br>
        Let me know!
       </p>
       <button className="mailbtn">Send mail</button>
      </section>
     

    </>
  )
}
