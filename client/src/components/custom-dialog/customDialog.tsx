import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FC } from "react";

export interface AlertDialogProps {
  open: boolean;
  title: string;
  description: string;
  disagreeText?: string;
  agreeText?: string;
  onClose: () => void;
  onAgree?: () => void;
}

const AlertDialog: FC<AlertDialogProps> = ({ open, title, description, agreeText = "OK", onClose, onAgree }) => {
  const handleAgree = () => {
    if (onAgree) onAgree();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" role="alertdialog">
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAgree}>{agreeText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
