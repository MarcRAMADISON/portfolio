import { useState, useEffect } from "react";
import MenuBar from "../../components/menuBar/menuBar";
import SpeedMail from "../../components/speedMail/speedMail";
import Box from "@mui/material/Box";
import "animate.css/animate.compat.css";
import {
  Button,
  TextField,
  Typography,
  TextareaAutosize,
  Alert,
  useMediaQuery,
  Switch,
} from "@mui/material";
import Animation from "../../components/Animation";
import { experiences, outils, services } from "../../utilities/data";
import ServiceCard from "../../components/ServiceCard";
import Lottie from "lottie-react";
import animation from "./welcomeAnimation.json";
import techAnimation from "./techAnimation.json";
import emailjs from "@emailjs/browser";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomModal from "../../components/CustomModal";
import ExperienceCard from "../../components/ExperienceCard";
import Footer from "../../components/footer/footer";
import { Download, Send } from "@mui/icons-material";
import { Chart } from "chart.js/auto";
import my_cv from "./new-cv.pdf";
import ShapeAnimation from "../../components/shapeAnimation";
import ScrollView from "../../components/scrollView";
import animation1 from "../homePage/Animation1.json";

const Homepage = () => {
  const isMobile = useMediaQuery("(max-width:920px)");
  const [status, setStatus] = useState("init");
  const [values, setValues] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [clickedService, setClickedService] = useState();
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => setLoading(false), 4000);
    }
  }, []);

  useEffect(() => {
    if (document.getElementById("myChart")) {
      const ctx = document.getElementById("myChart");

      const chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Javascript",
            "Reactjs",
            "Nextjs",
            "HTML5/CSS3",
            "Nodejs",
            "Expessjs",
            "Postgresql",
            "Strapi CMS",
            "Docker/Docker compose",
          ],
          datasets: [
            {
              data: [80, 90, 90, 70, 90, 70, 60, 70, 60],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      return () => chart.destroy();
    }
  }, [checked, isMobile]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3490, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 780 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 780, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const sendMail = () => {
    setStatus("proccess");
    emailjs
      .send("service_4alwvji", "template_tzdxihv", values, "PPZf-H8bAQdM8vymv")
      .then((res) => {
        if (res.status === 200) {
          setStatus("success");
          setValues();
        } else {
          setStatus("error");
        }
      })
      .catch((e) => setStatus("error"));
  };

  const handleChange = (event) => {
    event.preventDefault();
    setValues((prev) => ({
      ...prev,
      [event?.target?.name]: event?.target?.value,
    }));
  };

  return (<Box
      style={{
        backgroundColor: "#0f0f0f",
        dispalay: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ScrollView />
      <MenuBar />
      <SpeedMail />
      <Box
        id="home"
        className="block"
        sx={{
          width: "100vw",
          maxWidth:"1680px",
          height: "90vh",
          minHeight: isMobile? "100vh": "900px",
          margin:"auto",
          placeSelf:"center",
          display:"flex",
          flexDirection: isMobile? 'column' : 'row'
        }}
      >
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop:isMobile ? '17vh' : '40vh',
            width: isMobile ? "100%" : "60%",
            textAlign:"center",
            marginLeft:isMobile ? '0px' : '2rem'
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
            }}
            width="90%"
            animationData={animation1}
          />
        
      </Box>
      <Box
        id="about"
        className="block"
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile ? "85%" : "repeat(2,1fr)",
          gap: "30px",
          alignItems: "center",
          marginLeft: isMobile ? "0" : "10%",
          width: isMobile ? "90%" : "80%",
          padding: "10px",
          position: "relative",
        }}
      >
        {!isMobile ? <Animation
          animationIn="fadeIn"
          animationOut="fadeOut"
          duration={3}
          initiallyVisible={false}
        >
          <Lottie
            style={{ maxWidth: "720px", marginLeft: isMobile ? "20%" : "0px" }}
            width="90%"
            animationData={animation}
          />
        </Animation> : <></>}
        <Animation
          animationIn="fadeIn"
          animationOut="fadeOut"
          duration={4}
          initiallyVisible={false}
        >
          <Box
            sx={{
              dispalay: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: isMobile ? "95%" : "90%",
              mt: isMobile ? "20px" : "40px",
              textAlign: "center",
              ml: "25%",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#ff932b",
                mb: "30px",
                ml: isMobile ? "0px" : "20px",
              }}
              variant={isMobile ? "h4" : "h3"}
            >
              A propos
            </Typography>
            <Typography
              sx={{
                fontStyle: "italic",
                color: "#f0f0f0",
                lineHeight: "30px",
                zIndex: 100,
              }}
              variant={isMobile ? "body2" : "body1"}
            >
              Je m'appelle Marc RAMADISON, je suis un développeur fullstack
              javascript expérimenté avec 3 ans d'expérience notamment avec les
              technologies Reactjs, Nextjs, React material UI, Nodejs, Express
              et le CMS Headless Strapi.
              <br />
              <br />
              Je peux prendre en main votre projet que se soit un site vitrine,
              e-commerce avec payement en ligne, site de payement, blog,
              portfolio, ...
              <br />
              <br />
              Je maitrise aussi des outils de design comme Photoshop,
              Illustrator. Pour vous offrir un designs moderne à votre projet.
            </Typography>
          </Box>
        </Animation>
        <ShapeAnimation size="large" bottom="-150px" right="-3vw" />
        <ShapeAnimation size="small" bottom="-250px" right="35vw" />
      </Box>
      <Box
        id="services"
        className="block"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "80px",
          paddingTop: "60px",
          width: "100%",
        }}
      >
        <Animation
          animationIn="fadeIn"
          animationOut="fadeOut"
          duration={4}
          initiallyVisible={false}
        >
          <Typography
            sx={{ fontWeight: "bold", color: "#ff932b" }}
            variant={isMobile ? "h4" : "h3"}
          >
            Mes services
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: isMobile ? "75%" : "90%",
              maxWidth: "1100px",
              marginTop: "10px",
              overflow: "visible",
              "& .react-multi-carousel-item": {
                display: "flex",
                justifyContent: "center",
              },
              "& .react-multiple-carousel__arrow--left": {
                left: "0%",
              },
              "& .react-multiple-carousel__arrow--right": {
                right: "0%",
              },
              "& .react-multi-carousel-dot-list": { bottom: "0" },
              "& .react-multi-carousel-track": {
                textAlign: "center",
                margin: "35px 1px",
              },
              "& .react-multiple-carousel__arrow": {
                background: "#3457ff",
                opacity: "0.7",
                zIndex: "999",
              },
              "& .react-multi-carousel-dot button": {
                borderColor: "#ff932b",
              },
              "& .react-multi-carousel-dot--active button": {
                background: "#3457ff",
              },
            }}
          >
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={!isMobile ? true : false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablette", "web"]}
              //deviceType={deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {services.map((service, index) => {
                return (
                  <ServiceCard
                    key={index}
                    service={service}
                    setClickedService={setClickedService}
                    setOpen={setOpenModal}
                  />
                );
              })}
            </Carousel>
          </Box>
        </Animation>
      </Box>
      <Box
        id="competence"
        className="block"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "100px",
          pt: "60px",
          position: "relative",
        }}
      >
        <ShapeAnimation
          size="small"
          bottom={!checked ? "490px" : "650px"}
          right="30vw"
        />

        <Animation
          animationIn="fadeIn"
          animationOut="fadeOut"
          duration={4}
          initiallyVisible={false}
        >
          <Typography
            sx={{ fontWeight: "bold", color: "#ff932b" }}
            variant={isMobile ? "h4" : "h3"}
          >
            Mes compétences
          </Typography>
        </Animation>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "100%" : "70% 30%",
            gap: "10px",
            width: isMobile ? "100%" : "85%",
            maxWidth: "1100px",
            mt: isMobile ? "30px" : "60px",
          }}
        >
          <Animation
            animationIn="fadeIn"
            animationOut="fadeOut"
            duration={4}
            initiallyVisible={false}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-start",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Switch
                  size={isMobile ? "small" : "medium"}
                  checked={checked}
                  onChange={() => setChecked((prev) => !prev)}
                  sx={{
                    mb: isMobile ? "15px" : "20px",
                    mr: "10px",
                    mt: isMobile ? "5px" : "0px",
                  }}
                  label="mode graphique"
                />
                <Typography
                  sx={{ fontStyle: "italic" }}
                  color="primary"
                  variant={isMobile ? "h6" : "h5"}
                >
                  {checked ? "Mode affichage" : "Mode graphique"}
                </Typography>
              </Box>

              {checked ? (
                <img
                  style={{
                    maxWidth: "920px",
                    width: isMobile ? "80%" : "100%",
                    maxHeight: isMobile ? "70vh" : "75%",
                    objectFit: "contain",
                    objectPosition: "50% 0",
                  }}
                  src={
                    isMobile
                      ? "/images/mobile-rating-skill.jpg"
                      : "/images/rating-skill.jpg"
                  }
                  alt="compétances"
                />
              ) : (
                <Box>
                  <canvas
                    id="myChart"
                    width={isMobile ? "300px" : "700px"}
                    height={isMobile ? "350px" : "400"}
                  ></canvas>
                </Box>
              )}
            </Box>
          </Animation>

          <Animation
            animationIn="fadeIn"
            animationOut="fadeOut"
            duration={4}
            initiallyVisible={false}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                mt: isMobile ? "10px" : "30px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#f0f0f0",
                  textAlign: "center",
                  width: "100%",
                }}
                variant="h6"
              >
                Outils supplémentaires
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",

                  gap: isMobile ? "8px" : "5px",
                }}
              >
                {outils.map((outil, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mt: "20px",
                      }}
                    >
                      <img
                        src={outil.icon}
                        alt="outil icon"
                        style={{
                          objectFit: outil?.objectFit,
                          width: isMobile ? "40px" : "50px",
                          height: isMobile ? "40px" : "50px",
                        }}
                      />
                      <Typography
                        sx={{ fontStyle: "italic", color: "#f0f0f0" }}
                        variant="body2"
                      >
                        {outil.title}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Animation>
        </Box>
      </Box>
      <Box
        id="experiences"
        className="block"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: isMobile ? "100px" : "0px",
          pt: "60px",
          position: "relative",
        }}
      >
        <ShapeAnimation size="large" bottom="300px" right="20vw" />
        <Animation
          animationIn="fadeIn"
          animationOut="fadeOut"
          duration={4}
          initiallyVisible={false}
        >
          <Typography
            sx={{ fontWeight: "bold", color: "#ff932b" }}
            variant={isMobile ? "h4" : "h3"}
          >
            Expériences
          </Typography>
        </Animation>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "100%" : "repeat(3,1fr)",
            width: "90%",
            maxWidth: "1100px",
            mt: isMobile ? "30px" : "70px",
            gap: isMobile ? "70px" : "20px",
          }}
        >
          {experiences.map((experience, index) => {
            return (
              <Animation
                animationIn="fadeIn"
                animationOut="fadeOut"
                duration={4}
                initiallyVisible={false}
              >
                <Box sx={{ placeSelf: "center" }} key={index}>
                  <ExperienceCard
                    title={experience.title}
                    date={experience.date}
                    description={experience.description}
                    place={experience.place}
                    isMobile={isMobile}
                  />
                </Box>
              </Animation>
            );
          })}
        </Box>
      </Box>
      <Box
        id="contact"
        className="block"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "100px",
          p: "60px 40px",
          position: "relative",
        }}
      >
        <ShapeAnimation size="small" bottom="500px" right="60vw" />
        <Animation
          animationIn="fadeIn"
          animationOut="fadeOut"
          duration={4}
          initiallyVisible={false}
        >
          <Typography
            sx={{ fontWeight: "bold", color: "#ff932b" }}
            variant={isMobile ? "h4" : "h3"}
          >
            Contact
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              width: isMobile ? "100%" : "45%",
              maxWidth: "450px",
              mt: "30px",
              p: "20px",
              backgroundColor: "#474a51",
              height: "480px",
            }}
          >
            {status === "success" ? (
              <Alert color="success">Votre message a été envoyé</Alert>
            ) : status === "error" ? (
              <Alert color="error">Erreur d'envoie de votre message</Alert>
            ) : (
              <></>
            )}

            <Typography
              variant="body2"
              color="#F0F0F0"
              sx={{
                fontStyle: "italic",
                width: "80%",
                textAlign: "center",
                m: "10px 0px 50px 0px",
              }}
            >
              Envoyer nous un message par mail. Nous vous répondrons le plus tôt
              possible
            </Typography>

            <TextField
              sx={{
                width: "90%",
                mb: "20px",
                "& .css-1eed5fa-MuiInputBase-root-MuiInput-root": {
                  color: "#d0d0d0",
                },
                "& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root": {
                  color: "#f0f0f0",
                },
                "& .css-1eed5fa-MuiInputBase-root-MuiInput-root::before": {
                  borderBottom: "1px solid #f0f0f0",
                },
                "& .css-1eed5fa-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before":
                  {
                    borderBottom: "1px solid #f0f0f0",
                  },
                "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root": {
                  color: "#f0f0f0",
                },
              }}
              type="text"
              id="filled-basic"
              name="from_name"
              label="Votre adresse email"
              variant="standard"
              onChange={handleChange}
              required
            />
            <Typography
              variant="body2"
              color="#F0F0F0"
              sx={{ width: "100%", textAlign: "left", m: "10px 0px 0px 40px" }}
            >
              Votre message *:
            </Typography>
            <TextareaAutosize
              style={{
                width: "90%",
                backgroundColor: "#82898f",
                color: "#f0f0f0",
              }}
              minRows={10}
              type="text"
              name="message"
              className="inputMail"
              onChange={handleChange}
              required
            />
            <Button
              startIcon={<Send />}
              onClick={sendMail}
              variant="contained"
              sx={{ marginTop: "30px", width: "50%" }}
              disabled={
                status === "proccess" || !values?.from_name || !values?.message
              }
            >
              Envoyer
            </Button>
          </Box>
        </Animation>
      </Box>
      <Footer isMobile={isMobile} />
      <CustomModal
        open={openModal}
        setOpen={setOpenModal}
        title={clickedService?.name}
        description={clickedService?.description}
      />
    </Box>)

};

export default Homepage;
