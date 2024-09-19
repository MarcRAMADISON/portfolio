import React from "react";
import { Box, Typography } from "@mui/material";

const ExperienceCard = ({ title, description, date, place }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#222",
        padding: "25px",
        maxWidth: "350px",
        height:'100%',
        minHeight: "300px",
        placeSelf: "center",
        textAlign: "center",
      }}
    >
      <Typography sx={{fontWeight:'bold'}} className="title" color="#ff932b" variant="h6">
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: "10px",
          textAlign: "center",
        }}
      >
        <Typography style={{fontWeight:'bold'}} className="title" color="#f0f0f0" variant="body1">
          {place}
        </Typography>
        <Typography
          sx={{ fontStyle:'italic',mt: "5px" }}
          className="title"
          color="#f0f0f0"
          variant="body2"
        >
          {date}
        </Typography>
      </Box>
      {description.map((d) => {
        return (
          <Box sx={{display:'flex',mt:'20px'}}>
            <Box sx={{backgroundColor:"#ff932b",width:'10px',height:'10px',borderRadius:'50%',m:'10px 20px 0px 0px'}}></Box>
            <Typography
            sx={{width:'90%',textAlign:'left'}}
              className="title"
              color="#f0f0f0"
              variant="body1"
            >
              {d}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default ExperienceCard;
