import AnimatedStars from "./components/Stars/AnimatedStars";
import Earth from "./components/Earth/Earth";
import Sun from "./components/Sun/Sun";

const Experience = () => {
  return (
    <>
      <color attach="background" args={["black"]} />
      <AnimatedStars />
      <Sun />
      <Earth displacementScale={0.15} />
    </>
  );
};

export default Experience;
