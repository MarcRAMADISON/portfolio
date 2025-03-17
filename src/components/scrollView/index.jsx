import { Box } from "@mui/material";
import { useState,useEffect } from "react";

function ScrollView() {
    const [position,setPosition]=useState()


    useEffect(() => {
        
          const section = document.querySelectorAll(".block");
    
          window.addEventListener("scroll", () => {
            section.forEach((sec) => {
              const top = window.scrollY;
              const offset = sec.offsetTop - 300;
              const height = sec.offsetHeight;
              const id = sec.getAttribute("id");
              if (id && top >= offset && top < offset + height) {
                if(id === 'home'){
                    setPosition(0)
                } else if(id === 'about'){
                    setPosition(20)
                } else if(id === 'services'){
                    setPosition(40)
                } else if (id === 'competence'){
                    setPosition(60)
                } else if(id === 'experiences'){
                    setPosition(80)
                } else if (id === 'contact' ){
                    setPosition(100)
                } else if (id === 'footer'){
                    setPosition(100)
                }
              }
            });
          });
        
      }, []);

  return (
    <Box
      className="shape"
      sx={{
        position: "fixed",
        top: 0,
        left:0,
        backgroundColor: "#ff932b",
        height: `${position}vh`,
        width: "0.8vw",
        zIndex:'5',
        transition:' height 1s ease-in',
      }}
    ></Box>
  );
}

export default ScrollView;
