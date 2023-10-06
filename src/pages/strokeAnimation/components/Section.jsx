import { useInView, animated } from '@react-spring/web'

const Section = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      }
    }),
    {
      amount: 0.9
    }
  );

  return (
    <animated.div ref={ref} style={springs}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aspernatur explicabo doloremque ex earum deleniti itaque repellendus labore placeat laboriosam?
    </animated.div>
  );
};

export { Section };
