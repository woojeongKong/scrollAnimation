import { useRef } from "react";
import { useScroll } from "@react-spring/web";

import { ScrollSnapView } from "./components/ScrollSnapView";
import { BackgroundAnimationView } from "./components/BackgroundAnimationView";
import { CardAnimationView } from "./components/CardAnimationView";
import { Intro } from "./components/Intro";
import { CartSection } from "./components/CartSection";

const CardAnimation = () => {
  const snapScrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: snapScrollRef,
  });

  return (
    <div className={"text-[white]"}>
      <BackgroundAnimationView scrollYProgress={scrollYProgress} />
      <CardAnimationView scrollYProgress={scrollYProgress} />
      <ScrollSnapView scrollRef={snapScrollRef}>
        <Intro />
        <CartSection />
        <CartSection />
        <CartSection />
      </ScrollSnapView>
    </div>
  );
};

export { CardAnimation };
