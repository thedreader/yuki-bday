import dynamic from "next/dynamic";
import loadingAnimation from "../../public/animations/loadingAnimation.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const MyLottieComponent = () => {
  return (
    <div>
      <Lottie
        animationData={loadingAnimation}
        loop={true}
      />
    </div>
  );
};

export default MyLottieComponent;
