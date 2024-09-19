import { Box, Typography } from "@mui/material";
import { EmailRounded, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "30px",
        p: "10px",
        height: "60px",
      }}
    >
      <Box sx={{ display: "flex",justifyContent:'space-around',alignItems:'center',width:'70px' }}>
        <a
          href="mailto:marcramadison006@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <EmailRounded size="large" sx={{ color: "#f0f0f0" }} />
        </a>
        <a
          href="mailto:marcramadison006@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn size="large" sx={{ color: "#f0f0f0" }}/>
        </a>
      </Box>
      <Typography
        variant="body2"
        color="#f0f0f0"
        style={{ fontStyle:'italic',textAlign: "center" }}
      >
        Copyright 2024{" "}
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
