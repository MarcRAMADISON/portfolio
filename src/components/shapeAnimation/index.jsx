import { Box, useMediaQuery } from "@mui/material";

function ShapeAnimation({ size, bottom,right }) {
    const isMobile = useMediaQuery("(max-width:920px)");

  return isMobile ? <></> : size === "large" ? (
    <Box
      className="shape"
      sx={{
        position: "absolute",
        bottom: {bottom},
        right: {right},
        backgroundColor: "#3457ff",
        borderRadius: "50%",
        height: "32vw",
        width: "32vw",
        opacity: "0.2",
        maxWidth:'550px',
        maxHeight:'550px'
      }}
    ></Box>
  ) : (
    <Box
      className="shapeSmall"
      sx={{
        position: "absolute",
        bottom: {bottom},
        right: {right},
        backgroundColor: "#3457ff",
        borderRadius: "50%",
        height: "15vw",
        width: "15vw",
        opacity: "0.2",
        maxWidth:'250px',
        maxHeight:'250px'
      }}
    ></Box>
  );
}

export default ShapeAnimation;
