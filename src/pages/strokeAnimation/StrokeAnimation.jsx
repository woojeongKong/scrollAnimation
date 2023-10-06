import { useScroll } from "@react-spring/web";

import { Intro } from "./components/Intro";
import { SvgPathAnimation } from "./components/SvgPathAnimation";
import { ContentAnimation } from "./components/ContentAnimation";

const StrokeAnimation = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className={"text-[white]"}>
      <Intro />
      <SvgPathAnimation scrollYProgress={scrollYProgress} />
      <ContentAnimation />
    </div>
  );
};

export { StrokeAnimation };
