import { useState, useEffect } from "react";
import "./speedMailStyle.css";
import {
  TextField,
  TextareaAutosize,
  Button,
  Box,
  Alert,
  Modal,
  IconButton,
  Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { Close, EmailRounded, Send } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85vw",
  maxWidth: "350px",
  height: "auto",
  maxHeight: "600px",
  bgcolor: "background.paper",
  boxShadow: 24,
  textAlign: "center",
  p: "40px",
  border: "none",
  outline: "none !important",
};

function SpeedMail() {
  const [showForm, setShowForm] = useState(false);
  const [values, setValues] = useState();
  const [status, setStatus] = useState("init");
  const [showMessage, setShowMessage] = useState(false);

  const handleClose = () => setShowForm(false);

  useEffect(() => {
    const container = document.getElementById("hover");

    container.addEventListener("mouseenter", () => {
      setShowMessage(true);
    });
    container.addEventListener("mouseleave", () => {
      setShowMessage(false);
    });
  }, []);

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

  return (
    <>
      <Box
        sx={{
          backgroundColor:'#3457ff',
          borderRadius:'20px',
          p:'15px 20px 15px 20px',
          position: "fixed",
          bottom: "40px",
          right: "80px",
          opacity: showMessage ? "0.9" : "0",
          color:'#fff',
          zIndex: '50',
          transition:'all 0.3s ease-in'
        }}
      >Envoyer un message</Box>
      <Box className="borderContainer"> </Box>
      <Box
        id="hover"
        className="speedMailContainer"
        onClick={() =>
          setShowForm((prev) => {
            setStatus("init");
            setValues();
            return !prev;
          })
        }
      >
        <IconButton sx={{ width: "100%", color: "#f0f0f0" }}>
          <EmailRounded />
        </IconButton>
      </Box>
      <Modal
        open={showForm}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              backgroundColor: "#ff932b",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100px",
              borderRadius: "0px 0px 60% 0px",
              zIndex: "0",
            }}
          ></Box>
          <Box
            sx={{
              backgroundImage:
                "linear-gradient(to bottom left,#3457ff,#5d9cff)",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100px",
              borderRadius: "0px 0px 90% 0px",
              zIndex: "0",
            }}
          ></Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "absolute",
              top: "20px",
              left: "30px",
              zIndex: "60",
            }}
          >
            <img
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
              src="/images/profil.png"
              alt="profil"
            />
            <Typography
              sx={{ fontWeight: "bold", ml: "10px" }}
              variant="body1"
              color="#f0f0f0"
            >
              Contacter moi
            </Typography>
          </Box>

          <Button
            sx={{
              zIndex: 50,
              position: "absolute",
              top: "5px",
              right: "0",
              color: "red",
            }}
            onClick={(e) => {
              e.preventDefault();
              setShowForm(false);
            }}
          >
            <Close />
          </Button>

          <TextField
            type="email"
            sx={{ width: "100%", mb: "20px", mt: "90px" }}
            id="filled-basic"
            name="from_name"
            label="Votre adresse email"
            variant="standard"
            onChange={handleChange}
            required
          />
          <TextareaAutosize
            style={{ color: "grey" }}
            minRows={11}
            maxRows={11}
            type="text"
            name="message"
            placeholder="Votre message *"
            className="inputMail"
            onChange={handleChange}
            required
          />
          <Button
            startIcon={<Send />}
            onClick={sendMail}
            variant="contained"
            sx={{ marginTop: "20px", width: "50%" }}
            disabled={
              status === "proccess" || !values?.from_name || !values?.message
            }
          >
            Envoyer
          </Button>
          {status === "success" ? (
            <Alert sx={{ mt: "20px" }} color="success">
              Votre message a été envoyé
            </Alert>
          ) : status === "error" ? (
            <Alert sx={{ mt: "20px" }} color="error">
              Erreur d'envoie de votre message
            </Alert>
          ) : (
            <></>
          )}
        </Box>
      </Modal>
    </>
  );
}

export default SpeedMail;
