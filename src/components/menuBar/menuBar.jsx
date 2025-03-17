import { useCallback, useEffect, useState } from "react";
import "./menuBarStyle.css";
import { Box, Typography, useMediaQuery, Drawer, Button } from "@mui/material";
import {
  MenuRounded,
  CloseRounded,
  ArrowUpwardRounded,
} from "@mui/icons-material";

const MenuBar = () => {
  const isMobile = useMediaQuery("(max-width:920px)");
  const [open, setOpen] = useState(false);
  const [showUpAction, setShowUpAction] = useState(false);

  useEffect(() => {
    const section = document.querySelectorAll(".block");
    const items = document.querySelectorAll(".menuText");

    window.addEventListener("scroll", () => {
      section.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 300;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (id && top >= offset && top < offset + height) {
          if (id !== "home") {
            setShowUpAction(true);
          } else {
            setShowUpAction(false);
            //setShowMessage(false);
          }

          if (!isMobile) {
            items.forEach((item) => {
              if (
                item?.getAttribute("id") &&
                item?.getAttribute("id").includes(id)
              ) {
                item.style.color = "#ff932b";
              } else {
                item.style.color = "#f0f0f0";
                item.style.borderBottom = "none";
              }
            });
          }
        }
      });
    });
  }, [isMobile]);

  const handleClickMenuItems = useCallback(
    (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      isMobile && setOpen(false);
    },
    [isMobile]
  );

  const toggleDrawer = (state) => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          zIndex: "60",
          bottom: "110px",
          right: "23px",
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          border: "solid 1px #f0f0f0",
          opacity: showUpAction ? 1 : 0,
          transition: "opacity ease-in 2s",
        }}
      >
        <Button
          variant="text"
          onClick={() => handleClickMenuItems("home")}
          sx={{ color: "#f0f0f0" }}
          size="small"
        >
          <ArrowUpwardRounded />
        </Button>
      </Box>
      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            zIndex: "60",
            height: "60px",
            backgroundColor: "#222",
            boxShadow: "1px 1px 1px #f0f0f0",
            position: "fixed",
            left: "0",
          }}
        >
          <Button
            variant="text"
            onClick={() => toggleDrawer(true)}
            color="secondary"
            size="medium"
          >
            <Button
              sx={{ color: "#f0f0f0" }}
              startIcon={open ? <CloseRounded /> : <MenuRounded />}
              size="large"
            >
              Menu
            </Button>
          </Button>
          <Drawer
            anchor="right"
            sx={{
              "& .MuiDrawer-root": {
                width: "75%",
                bgcolor: "#222",
                position: "absolute",
                top: "60px",
                maxWidth: "300px",
              },
              "& .MuiDrawer-paper": {
                width: "75%",
                bgcolor: "#222",
                position: "absolute",
                top: "60px",
                maxWidth: "300px",
              },
            }}
            open={open}
            onClose={() => toggleDrawer(false)}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                height: "70px",
                width: "100%",
                borderBottom: "solid 1px #f0f0f0",
                mb: "10px",
                p: "5px",
                ml: "35px",
              }}
            >
              <img
                style={{ height: "50px", border: "#f0f0f0 solid 1px" }}
                src="/icones/my-logo-mobile.png"
                alt="Marc logo"
              />
              <Typography
                sx={{ ml: "15px", fontWeight: "bold" }}
                variant="body1"
                color="#f0f0f0"
              >
                Marc RAMADISON
              </Typography>
            </Box>
            <Box
              className={"menuTextMobile"}
              onClick={() => handleClickMenuItems("home")}
            >
              Accueil
            </Box>
            <Box
              className={"menuTextMobile"}
              onClick={() => handleClickMenuItems("about")}
            >
              A propos
            </Box>
            <Box
              className={"menuTextMobile"}
              onClick={() => handleClickMenuItems("services")}
            >
              Services
            </Box>
            <Box
              className={"menuTextMobile"}
              onClick={() => handleClickMenuItems("competence")}
            >
              Compétences
            </Box>
            <Box
              className={"menuTextMobile"}
              onClick={() => handleClickMenuItems("experiences")}
            >
              Expériences
            </Box>
            <Box
              className={"menuTextMobile"}
              onClick={() => handleClickMenuItems("contact")}
            >
              Contact
            </Box>
          </Drawer>
        </Box>
      ) : (
        <Box className="container">
          <img
            style={{ height: "60px", marginLeft: "50px" }}
            src="/icones/my-logo.png"
            alt="Marc logo"
          />
          <Box className="menu2">
            <Box
              id="homeNav"
              className={"menuText"}
              onClick={() => handleClickMenuItems("home")}
            >
              Accueil
            </Box>
            <Box
              id="aboutNav"
              className={"menuText"}
              onClick={() => handleClickMenuItems("about")}
            >
              A propos
            </Box>
            <Box
              id="servicesNav"
              className={"menuText"}
              onClick={() => handleClickMenuItems("services")}
            >
              Services
            </Box>
            <Box
              id="competenceNav"
              className={"menuText"}
              onClick={() => handleClickMenuItems("competence")}
            >
              Compétences
            </Box>
            <Box
              id="experiencesNav"
              className={"menuText"}
              onClick={() => handleClickMenuItems("experiences")}
            >
              Expériences
            </Box>
            <Box
              id="contactNav"
              className={"menuText"}
              onClick={() => handleClickMenuItems("contact")}
            >
              Contact
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default MenuBar;
