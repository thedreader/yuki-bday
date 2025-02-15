import dynamic from "next/dynamic";
import cuteDogAnimation from "../../public/animations/cute_dog";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const CountDog = () => {
  return (
    <div>
      <Lottie
        animationData={cuteDogAnimation}
        loop={true}
      />
    </div>
  );
};

export default CountDog;
