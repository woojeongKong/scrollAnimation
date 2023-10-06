import { animated } from "@react-spring/web";
import { BackgroundSvgIntro } from "../../../images/BackgroundSvgIntro";
import { BackgroundSvgEarn } from "../../../images/BackgroundSvgEarn";
import { BackgroundSvgCashback } from "../../../images/BackgroundSvgCashback";

const BackgroundAnimationView = ({ scrollYProgress }) => {
  return (
    <div className={`w-screen h-screen flex flex-col justify-end max-w-3xl m-auto z-[-2] left-0 right-0 fixed`}>
      <animated.div
        className="absolute w-full h-full"
        style={{
          opacity: scrollYProgress.to(
            [0, 0.4],
            [1, 0],
          ),
        }}
      >
        <BackgroundSvgIntro />
      </animated.div>
      <animated.div
        className="absolute w-full h-full"
        style={{
          opacity: scrollYProgress.to(
            [0, 0.4, 0.7],
            [0, 1, 0],
          ),
        }}
      >
        <BackgroundSvgEarn />
      </animated.div>
      <animated.div
        className="absolute w-full h-full"
        style={{
          opacity: scrollYProgress.to(
            [0, 0.4, 0.7],
            [0, 0, 1],
          ),
        }}
      >
        <BackgroundSvgCashback />
      </animated.div>
    </div>
  );
};

export { BackgroundAnimationView };
