import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import gsap from "gsap";
//
import { UserContext } from "./UserContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Graphics from "./components/Graphics";
import Garanties from "./components/Garanties";
import Contact from "./components/Contact";

function App() {
  const [menu, setMenu] = useState(false);

  let circle = useRef(null);
  let headerDetails = useRef(null);
  let rulesElem = useRef(null);
  // For Gsap
  useEffect(() => {
    // GSAP;
    gsap.fromTo(
      circle.current,
      { y: "-150%" },
      { y: 0, duration: 2, delay: 0.2 }
    );
    gsap.fromTo(
      headerDetails.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 2.2 }
    );
    gsap.fromTo(
      rulesElem.current,
      { opacity: 0 },
      { opacity: 1, duration: 2.5, delay: 2.8 }
    );
    //
  }, []);

  return (
    <>
      <UserContext.Provider value={{ menu, setMenu }}>
        <Navbar gsap={circle} gsap2={headerDetails} />

        <div className="Container" ref={rulesElem}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/techno" element={<Technologies />} />
            <Route path="/graphics" element={<Graphics />} />
            <Route path="/garanties" element={<Garanties />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={<div className="text-[40px] text-[green]">No found</div>}
            />
          </Routes>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
