import { Box, Typography } from "@mui/material";
import { Copyright, EmailRounded, LinkedIn, WhatsApp } from "@mui/icons-material";

function Footer({ isMobile }) {
  return (
    <Box
      id="footer"
      className="block"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "10px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile ? "100%" : "repeat(3,1fr)",
          gap:'15px',
          mb: "30px",
          maxWidth:'565px'
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <WhatsApp size="large" sx={{ color: "#f0f0f0" }} />
          <Typography sx={{ color: "#f0f0f0", ml: "7px" }} variant="body2">
            +261336628722
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",alignItems: "center"
          }}
        >
          <EmailRounded size="large" sx={{ color: "#f0f0f0" }} />
          <Typography sx={{ color: "#f0f0f0", ml: "7px" }} variant="body2">
            marcramadison006@gmail.com
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex", alignItems: "center",
          }}
        >
          <LinkedIn size="large" sx={{ color: "#f0f0f0" }} />
          <Typography sx={{ color: "#f0f0f0", ml: "7px" }} variant="body2">
            Marc RAMADISON
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="body2"
        color="#f0f0f0"
        style={{ fontStyle: "italic", textAlign: "center" }}
      >
        Copyright 2024<Copyright sx={{color:'#f0f0f0',height:'15px'}}/>{" "}
        <a
          href="mailto:marcramadison006@gmail.com"
          style={{ color: "#3457ff", fontWeight: "bold" }}
        >
          Marc RAMADISON
        </a>{" "}
        . All rights reserved
      </Typography>
    </Box>
  );
}

export default Footer;
