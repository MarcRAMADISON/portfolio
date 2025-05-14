
import { Download } from "@mui/icons-material";
import my_cv from "../../pages/homePage/new-cv.pdf";
import animation1 from "../../pages/homePage/Animation1.json";
import ParticlesBackground from "../../components/ParticlesBackground/particulesBackGround";
import Box from "@mui/material/Box";
import { Typography,Button } from "@mui/material";
import Lottie from "lottie-react";



function Welcome({isMobile}) {
    return ( <Box
        id="home"
        className="block"
        sx={{
          width: "100vw",
          maxWidth:"1920px",
          maxHeight:"1080px",
          height: "90vh",
          minHeight: isMobile? "100vh": "900px",
          placeSelf:"center",
          display:"flex",
          flexDirection: isMobile? 'column' : 'row',
          position:'relative',
          margin:"auto",
        }}
      >
        <ParticlesBackground/>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin:isMobile? "17vh auto auto auto" : "auto",
            placeSelf:"center",
            width: isMobile ? "100%" : "60%",
            textAlign:"center",
            marginLeft:isMobile ? '0px' : '2rem',
            zIndex:5
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", color: "#ff932b" }}
            variant={isMobile ? "h4" : "h3"}
          >
            Marc RAMADISON
          </Typography>

          <Typography
            sx={{ fontStyle: "italic", color: "#f0f0f0", mt: "10px" }}
            variant={isMobile ? "body1" : "h6"}
          >
            Développeur web fullstack
          </Typography>

          <a
            href={my_cv}
            download="Marc_Ramadison's_CV"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              startIcon={<Download />}
              size={isMobile ? "medium" : "large"}
              variant="contained"
              sx={{ mt: isMobile ? "30px" : "40px" }}
            >
              Télécharger mon CV
            </Button>
          </a>
        </Box>
        <Lottie
            style={{
              maxWidth: "920px",
              margin:"auto",
              placeSelf:"end"
            }}
            width="90%"
            animationData={animation1}
          />
        
      </Box> );
}

export default Welcome;