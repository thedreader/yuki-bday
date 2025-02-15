import dynamic from "next/dynamic";
import countdownAnimation from "../../public/animations/countdownAnimation";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const CountdownComponent = () => {
  return (
    <div>
      <Lottie
        animationData={countdownAnimation}
        loop={true}
      />
    </div>
  );
};

export default CountdownComponent;
