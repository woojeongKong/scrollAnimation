import { DownArrowSvg } from "../../../images/DownArrowSvg";

const Intro = () => {
  return (
    <div className="h-[400px] flex flex-col justify-center items-center pt-[80px] z-[999]">
      <h1 className={"text-[40px]"}>Scroll Down</h1>
      <div className="h-[15px]"></div>
      <DownArrowSvg />
    </div>
  );
};

export { Intro };
