import HeroFive from "../components/HeroFive";
import HeroFour from "../components/HeroFour";
import HeroOne from "../components/HeroOne";
import HeroSix from "../components/HeroSix";
import HeroThree from "../components/HeroThree";
import HeroTwo from "../components/HeroTwo";

function LandingPage() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-slate-100">
      <HeroOne />
      <HeroTwo />
      <HeroThree />
      <HeroFour />
      <HeroFive />
      <HeroSix />
    </div>
  );
}

export default LandingPage;
