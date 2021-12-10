import { useState } from "react";
import ScrollContext from "./ScrollContext";

const ScrollProvider = ({ children }) => {
  // React-Spring API -----------------------------------
  const springSetup = {
    from: { y: 30 },
    to: { y: 0 },
    delay: 100,
    config: { friction: 60, mass: 1, tension: 280, duration: 1000 },
  };

  const [scroll, setScroll] = useState("auto");
  const [springProps, setSpringProps] = useState(springSetup);
  const providedData = { setScroll, springProps };

  // body scroll ---------------------------------------
  document.body.style.overflow = scroll;
  return (
    <ScrollContext.Provider value={providedData}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
