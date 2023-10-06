import arrowDown from "../../../images/down-arrow.svg"

const Intro = () => {
  return (
    <div className="w-screen h-screen p-6 flex flex-col justify-end max-w-3xl m-auto z-1 snap-center">
      <p className="font-sans text-brand-grey-base text-xl leading-6">
        Introducing
      </p>
      <h1 className="font-sans text-4xl font-extrabold my-2">Credit Card!</h1>
      <p className="font-sans text-brand-grey-base text-lg mb-4">
        Biggest Rewards program
      </p>
      <div
        className="flex flex-col items-center mt-8 mb-2"
      >
        <img src={arrowDown} className="w-6 animate-bounce" />
        <img src={arrowDown} className="w-6 animate-bounce" />
      </div>
    </div>
  );
};

export { Intro };
