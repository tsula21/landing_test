import React, { useEffect, useRef } from "react";
import "../css/PageTransition.scss";
import { Power4 } from "gsap";
const PageTransition = ({ timeline }) => {
  const trans = useRef(null);

  useEffect(() => {
    timeline.to(trans.current, {
      duration: 1,
      x: 2400,
      ease: Power4.easeOut,
    });
  });
  return (
    <div>
      <div className="transition_effect" ref={trans}></div>
    </div>
  );
};

export default PageTransition;
