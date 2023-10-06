import { animated } from "@react-spring/web";
import percentImg from "../../../images/five-percent-cashback.png";

const cardsInitialTransforms = [
  'translate3d(-5%, 94%, -75px) rotate3d(1, 0, 1, -40deg)',
  'translate3d(-5%, 40%, 0px) rotate3d(1, 1, 1, -10deg)',
  'translate3d(8%, 6%, 90px) rotate3d(1, 1, 1, 30deg)',
];

const INIT_CARD_IMAGES = [
  "https://cdn.indiawealth.in/public/images/ind-credit-card-1.png",
  "https://cdn.indiawealth.in/public/images/ind-credit-card-2.png",
  "https://cdn.indiawealth.in/public/images/ind-credit-card-3.png",
];

const SAMPLE_CARD_IMAGES = [
  "https://cdn.indiawealth.in/public/images/super-saver-credit-card.png",
  "https://cdn.indiawealth.in/public/images/super-credit-card.png",
];

const CardAnimationView = ({ scrollYProgress }) => {
  return (
    <div className={`w-screen h-screen flex flex-col justify-end max-w-3xl m-auto z-[-1] left-0 right-0 fixed`}>
      <div
        className="w-full h-full"
        style={{ perspective: '1000px' }}
      >
        {INIT_CARD_IMAGES.map((imgSrc, index) => {
          return (
            <animated.img
              src={imgSrc}
              className={`absolute top-[10%] left-[10%] w-3/4 max-w-sm md:left-1/4 ${
                index === 0 ? 'drop-shadow-2xl' : ''
              }`}
              style={{
                opacity: scrollYProgress.to(
                  [0, 0.1, 0.3, 0.4],
                  [1, 1, 0, 0]
                ),
                transform: scrollYProgress.to(
                  [0, 0.1, 0.3, 0.4],
                  [
                    cardsInitialTransforms[index],
                    'translate3d(0, 10%, 0) rotate3d(0, 0, 0, 0deg)',
                    'translate3d(20%, 10%, 0) rotate3d(0, 0, 1, -90deg)',
                    'translate3d(20%, 10%, 0) rotate3d(0, 0, 1, -90deg)',
                  ]
                ),
              }}
              key={index}
            />
          );
        })}
      </div>
      <div className="w-full h-full">
        {SAMPLE_CARD_IMAGES.map((imgSrc, index) => {
          return (
            <animated.img
              src={imgSrc}
              className="absolute top-[5%] left-1/4 w-1/2 drop-shadow-2xl md:w-1/3 md:left-1/3"
              style={{
                opacity: scrollYProgress.to(
                  [0, 0.4, 0.7, 1],
                  [0, 0, 1, 1]
                ),
                transform: scrollYProgress.to(
                  [0, 0.4, 0.7, 1],
                  [
                    `translate3d(0, 0, ${index === 0 ? -75 : 0}px) rotate3d(0, 1, 0, ${
                      index === 0 ? 180 : 0
                    }deg)`,
                    `translate3d(0, 0, ${index === 0 ? -75 : 0}px) rotate3d(0, 1, 0, ${
                      index === 0 ? 180 : 0
                    }deg)`,
                    `translate3d(0, 0, ${index === 0 ? -75 : 0}px) rotate3d(0, 1, 0, ${
                      index === 0 ? 180 : 0
                    }deg)`,
                    `translate3d(0, 0, ${index === 0 ? -75 : 0}px) rotate3d(0, 1, 0, ${
                      index === 0 ? 0 : 180
                    }deg)`
                  ]
                ),
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
              key={index}
            />
          );
        })}
      </div>
      <animated.div
        className="absolute w-full h-full"
        style={{
          opacity: scrollYProgress.to(
            [0, 0.4, 0.7, 1],
            [0, 0, 0, 1]
          ),
          transform: scrollYProgress.to(
            [0, 0.4, 0.7, 1],
            ['translateX(-50%)', 'translateX(-50%)', 'translateX(-50%)', 'translateX(0%)']
          ),
        }}
      >
        <img
          src={percentImg}
          className="w-3/4 absolute top-1/4 md:top-1/3 md:left-1/4 max-w-xs"
        />
      </animated.div>
    </div>
  );
};

export { CardAnimationView };
