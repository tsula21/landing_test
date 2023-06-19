import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import arr from "../array";
//
import logo from "../assets/logoFrame.png";
import { GiHamburgerMenu } from "react-icons/Gi";
import { TbLetterX } from "react-icons/Tb";

const ResponsiveNav = () => {
  const { menu, setMenu } = useContext(UserContext);
  return (
    <>
      <img
        src={logo}
        className=" w-[200px] xl:w-[316px] lg:w-[316px]  xl:hidden lg:hidden cursor-pointer"
        alt="logo"
      />
      <div className="xl:hidden lg:hidden bg-[#26282e] w-[50px] h-[46px] flex items-center justify-center">
        {menu ? (
          <TbLetterX
            className=" text-[#fff] text-[40px] cursor-pointer absolute z-[1000] right-[30px]"
            onClick={() => setMenu(!menu)}
          />
        ) : (
          <GiHamburgerMenu
            className=" text-[#fff] text-[40px] cursor-pointer absolute z-[1000] right-[30px]"
            onClick={() => setMenu(!menu)}
          />
        )}
      </div>
      <ul
        className={`${
          menu ? "translate-x-0" : "translate-x-[-100%]"
        } respo_ul xl:hidden lg:hidden flex items-start pt-[80px] pl-[30px] flex-col bg-[#252525] h-[100vh] w-full z-[500] transition-transform duration-500 absolute top-0 left-0 right-0 bottom-0`}
      >
        {arr.map((item) => {
          return (
            <li key={item.id} onClick={() => setMenu(!menu)}>
              <Link to={`${item.link}`}>{item.title}</Link>
              <div className="menu_line"></div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ResponsiveNav;
