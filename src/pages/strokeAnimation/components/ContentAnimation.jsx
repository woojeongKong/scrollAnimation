import { Section } from "./Section";

const ContentAnimation = () => {
  return (
    <div
      className="absolute left-[50vw] top-0 translate-x-[-50%]"
    >
      <div className="text-block absolute right-[3rem] top-[115rem] w-[300px]">
        <Section />
      </div>
      <div className="text-block absolute right-[-20rem] top-[185rem] w-[600px] text-[40px]">
        <Section />
      </div>
      <div className="text-block absolute right-[-30rem] top-[235rem] w-[600px] text-[40px]">
        <Section />
      </div>
      <div className="text-block absolute right-[10rem] top-[270rem] w-[300px] text-[30px]">
        <Section />
      </div>
    </div>
  );
};

export { ContentAnimation };
