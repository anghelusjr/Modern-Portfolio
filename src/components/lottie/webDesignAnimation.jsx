import Lottie from "lottie-react";
import WebDesign from "../../assets/lottie/Website.json";

export function WebLottie() {
  return <Lottie 
  animationData={WebDesign}
   loop={true}
   className="absolute xl:w-60 xl:-top-10 right-0 bg-transparent z-0" 
   />;
}