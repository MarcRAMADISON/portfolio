import { useState } from "react";
import "./speedMailStyle.css";
import {
  TextField,
  TextareaAutosize,
  Button,
  Box,
  Alert,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { Close, EmailRounded, Send } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  maxWidth: "350px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  border: "none",
  outline: "none !important",
};

function SpeedMail() {
  const [showForm, setShowForm] = useState(false);
  const [values, setValues] = useState();
  const [status, setStatus] = useState("init");

  const handleClose = () => setShowForm(false);

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
      <Box className="borderContainer"> </Box>
      <Box
        className="speedMailContainer"
        onClick={() =>
          setShowForm((prev) => {
            setStatus("init");
            setValues();
            return !prev;
          })
        }
      >
        <IconButton  sx={{width:'100%',color:'#f0f0f0'}}><EmailRounded /></IconButton>
      </Box>
      <Modal
        open={showForm}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            sx={{
              position:'absolute',
              top:'15px',
              right:'15px',
              color:'red'
            }}
            startIcon={<Close/>}
            onClick={(e) => {
              e.preventDefault();
              setShowForm(false);
            }}
          />
          {status === "success" ? (
            <Alert color="success">Votre message a été envoyé</Alert>
          ) : status === "error" ? (
            <Alert color="error">Erreur d'envoie de votre message</Alert>
          ) : (
            <></>
          )}
          <Typography variant="h5" sx={{ fontWeight:'bold',color: "#ff932b", mt: "20px" }}>
            Besoin d'aide?
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontStyle:'italic', width: "100%", textAlign: "center", m: "10px 0px 50px 0px" }}
          >
            Envoyer nous un message par mail. Nous vous répondrons le plus tôt
            possible
          </Typography>
          <TextField
            type="email"
            sx={{ width: "100%", mb: "20px" }}
            id="filled-basic"
            name="from_name"
            label="Votre adresse email"
            variant="standard"
            onChange={handleChange}
            required
          />
          <TextareaAutosize
            style={{ color: "grey" }}
            minRows={10}
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
            sx={{ marginTop: "30px", width: "50%" }}
            disabled={
              status === "proccess" || !values?.from_name || !values?.message
            }
          >
            Envoyer
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default SpeedMail;
