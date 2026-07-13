import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Styles from "./customDialog.style.ts";
import { FC } from "react";
import { Box } from "@mui/material";

type AlertDialogProps = {
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
  onAgree?: () => void;
}

const AlertDialog: FC<AlertDialogProps> = ({ open, title, description, onClose, onAgree }) => {
  const handleAgree = () => {
    onAgree?.();
    onClose();
  };

  return (
    <Dialog sx={Styles.dialogModal} open={open} onClose={onClose} role="alertdialog">
      <Box  sx={Styles.dialogContent}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent >
          <DialogContentText sx={Styles.dialogText}>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAgree}>
            OK
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default AlertDialog;
