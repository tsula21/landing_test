import React, { useRef } from "react";
import "../css/animation.scss";
import btn from "../assets/btn_frame.png";
import PrimaryHeader from "./PrimaryHeader";

const Home = () => {
  const cardsRef = useRef(null);

  const handleMouseMove = (e) => {
    const cards = cardsRef.current.getElementsByClassName("card");
    console.log(e);
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center  justify-between xl:flex-row lg:flex-row">
        {/* Left */}
        <div className="w-[100%] xl:w-[50%] lg:w-[50%]">
          <PrimaryHeader
            children="Путешествие"
            className="main_title  uppercase leading-[1] xl:mb-[0px] lg:mb-[0px] mb-[10px] xl:text-left lg:text-left text-center text-[28px] md:text-[48px] xl:text-[58px] 2xl:text-[68px] font-bold"
          />
          <PrimaryHeader
            children="на красную планету"
            className="main_title  text-[18px] md:text-[24px] xl:text-[28px] 2xl:text-[34px] mb-[20px] xl:mb-[90px] lg:mb-[90px]  leading-[1] xl:text-left lg:text-left text-center  xl:block lg:block font-bold"
          />

          <span className="relative cursor-pointer opacity-[80%] hover:opacity-[100%] transition-opacity hidden xl:block lg:block">
            <img src={btn} alt="frame" />
            <p className="absolute top-[5px] left-[12px]">Начать путешествие</p>
          </span>
        </div>
        {/* Right */}
        <div className=" xl:h-[350px] lg:h-[350px]">
          <div id="cards" onMouseMove={handleMouseMove} ref={cardsRef}>
            <div className="card">
              <div className="card-border"></div>
              <div className="card-content">
                <p>Мы</p>
                <h2>1</h2>
                <p>на рынке</p>
              </div>
            </div>
            <div className="card">
              <div className="card-border"></div>
              <div className="card-content">
                <p> Гарантируем</p>
                <h2>50%</h2>
                <p>безопасность</p>
              </div>
            </div>
            <div className="card">
              <div className="card-border"></div>
              <div className="card-content">
                <p> Гарантируем</p>
                <span className="flex items-end">
                  <h2 className=" leading-[1]">2001</h2>г.
                </span>
                <p>безопасность</p>
              </div>
            </div>
            <div className="card">
              <div className="card-border"></div>
              <div className="card-content">
                <p> Гарантируем</p>
                <h2>597</h2>
                <p>безопасность</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
