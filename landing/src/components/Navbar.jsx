import { Link } from "react-router-dom";

import arr from "../array";
//
import logo from "../assets/logoFrame.png";
import ResponsiveNav from "./ResponsiveNav";

const Navbar = ({ gsap, gsap2 }) => {
  return (
    <nav
      ref={gsap}
      className="nav_border bg-[#00000051] 2xl:mb-[150px] mb-[65px] h-[100px] flex pt-[1px]"
    >
      <div ref={gsap2} className="Container flex items-center justify-between">
        <img
          src={logo}
          className="hidden xl:block lg:block cursor-pointer hover:scale-[1.02] transition-transform duration-150 ease-linear"
          alt="logo"
        />
        <ul className=" hidden xl:flex lg:flex items-center justify-between xl:w-[750px] lg:w-[600px] ">
          {arr.map((item) => {
            return (
              <li key={item.id} className="nav_element ">
                <Link
                  // className={`nav_element ${
                  //   nav === item.id ? "text-[#f95e47]" : ""
                  // }`}
                  to={`${item.link}`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <ResponsiveNav />
      </div>
    </nav>
  );
};

export default Navbar;
