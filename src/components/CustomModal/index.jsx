import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  maxWidth: "400px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function CustomModal({ open, setOpen, title, description }) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Button
          startIcon={<Close />}
          style={{
            position: "absolute",
            top: "5px",
            right: "0px",
            color: "red",
          }}
          onClick={() => setOpen(false)}
        />
        <Typography sx={{fontWeight:'bold'}} variant="h6" color="#ff932b">
          {title}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column",mt:'20px' }}>
          {(description || []).map((d) => {
            return (
              <Box sx={{ display: "flex" }}>
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
                  color="text.secondary"
                  variant="body1"
                >
                  {d}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Typography sx={{fontStyle:'italic',mt:'30px'}} color="#ff932b" variant="body2">
            Pour plus de fonctionnalité spécifique, contacter nous
          </Typography>
      </Box>
    </Modal>
  );
}
