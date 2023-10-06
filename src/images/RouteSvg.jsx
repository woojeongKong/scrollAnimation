import { animated } from "@react-spring/web";

const RouteSvg = ({ scrollYProgress }) => {
  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1047.79 4304.71"
      fill={"none"}
      stroke={"blue"}
      strokeWidth={"10px"}
      style={{
        strokeDashoffset: scrollYProgress.to((scrollPosition) => {
          return 7000 + (7000 * scrollPosition);
        }),
        strokeDasharray: 7000,
      }}
    >
      <path
        d="m523.89,4304.71v-102.65c0-380.2-349.01-699.56-349.01-699.56-444.83-376.4,250.93-486.65,250.93-486.65,444.83-102.65,557.68-250.93,557.68-250.93,283.93-319.37-486.96-646.34-486.96-646.34-258.91-112.16-314.04-296.55-314.04-296.55C-5.24,1295.45,395.39,1206.1,502.03,1255.07c65,29.84,105.64,109.85,90,179.91-35.06,157.03-234.66,151.32-234.66,151.32-287.05,0-340.67-193.9-340.67-193.9-85.15-285.15,215.21-534.18,215.21-534.18,309.81-245.7,291.98-636.53,291.98-636.53V0"
      />
    </animated.svg>
  );
};

export { RouteSvg };
