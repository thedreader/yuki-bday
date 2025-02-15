import dynamic from "next/dynamic";
import weirdDogAnimation from "../../public/animations/dog_animation_weird";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const CountdownComponent = () => {
  return (
    <div>
      <Lottie
        animationData={weirdDogAnimation}
        loop={true}
      />
    </div>
  );
};

export default CountdownComponent;
