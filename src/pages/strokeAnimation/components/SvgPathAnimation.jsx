import { RouteSvg } from "../../../images/RouteSvg";

const SvgPathAnimation = ({ scrollYProgress }) => {
  return (
    <div className={"absolute left-[50vw] top-[400px] w-[1048px] translate-x-[-50%]"}>
      <RouteSvg scrollYProgress={scrollYProgress} />
    </div>
  );
};

export { SvgPathAnimation };
