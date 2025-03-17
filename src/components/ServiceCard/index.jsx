import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";

const ServiceCard = ({ service, setClickedService, setOpen, }) => {
  const isMobile = useMediaQuery("(max-width:920px)");

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#222",
        padding: "10px",
        maxWidth: "320px",
        height: isMobile?"320px" : "350px",
        placeSelf: "center",
        ":hover .overlay": {
          height: "100%",
          opacity: 1,
        },
        ":hover .title": {
          color: "#ff932b",
        },
      }}
    >
      <Typography
        className="title"
        sx={{fontWeight:'bold', position: "absolute", top: "15px", zIndex: "60" }}
        color={"#f0f0f0"}
        variant="h6"
      >
        {service.name}
      </Typography>
      <img
        style={{ maxWidth: isMobile? "250px" : "300px", maxHeight: isMobile? "250px" : "300px", placeSelf: "center" }}
        src={service.icon}
        alt="icon service"
      />
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            flexDirection:'column',
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "0px",
            left: "0px",
            zIndex: "55",
            backgroundColor: "rgba(35,144,255,0.7)",
            padding: "20px",
            width: "100%",
            maxWidth: "280px",
            maxHeight: "330px",
            height: "0%",
            opacity: 0,
            transition: "all ease-in 0.5s",
          }}
          className="overlay"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {(service.description || []).map((d,index) => {
              return (
                <Box key={index} sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      backgroundColor: "#ff932b",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      m: "10px 20px 0px 0px",
                    }}
                  ></Box>
                  <Typography
                    sx={{ width: "90%", textAlign: "left" }}
                    color="#f0f0f0"
                    variant="body1"
                  >
                    {d}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Typography sx={{fontStyle:'italic',position:'absolute',bottom:'5px',width:'80%'}} color="#ff932b" variant="body2">
            Pour plus de fonctionnalité spécifique, contacter nous
          </Typography>
        </Box>
      )}
      {isMobile && (
        <Button
          variant="outlined"
          sx={{
            position: "absolute",
            bottom: 20,
          }}
          onClick={() => {
            setClickedService(service);
            setOpen(true);
          }}
        >
          Voir détail
        </Button>
      )}
    </Box>
  );
};

export default ServiceCard;
