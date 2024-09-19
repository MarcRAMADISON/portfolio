import ScrollAnimation from "react-animate-on-scroll";
import { useMediaQuery } from "@mui/material";

function Animation({ children, animationOut, animationIn, duration,initiallyVisible }) {
  const isMobile = useMediaQuery("(max-width:920px)");

  return (
    isMobile? <ScrollAnimation
    animateIn={animationIn}
    animateOut={animationOut}
    duration={3}
    style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}
    initiallyVisible={initiallyVisible}
  >
    {children}
  </ScrollAnimation>
    : <ScrollAnimation
      animateIn={animationIn}
      animateOut={animationOut}
      duration={duration}
      style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}
      initiallyVisible={initiallyVisible}
    >
      {children}
    </ScrollAnimation>
  );
}

export default Animation;
