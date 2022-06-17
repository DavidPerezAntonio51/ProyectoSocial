import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext } from "react";
import UserContext from "../../Contextos/UserContext";

function MostrarRespuesta({ children }) {
  const [open, setOpen] = useState(false);
  const Usuario = useContext(UserContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="regalBlue" onClick={handleClickOpen}>
        Mostrar Respuesta
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" color="stratos">
          {"No te preocupes "}{Usuario.User}{" hiciste tu mejor esfuerzo"}
        </DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus color="bondiBlue">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MostrarRespuesta;