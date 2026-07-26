import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Styles from "./customDialog.style.ts";
import { FC, useState } from "react";
import { Box } from "@mui/material";

type AlertDialogProps = {
  title: string;
  description: string;
};

const AlertDialog: FC<AlertDialogProps> = ({ title, description }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  return (
    <Dialog sx={Styles.dialogModal} open={isDialogOpen} role="alertdialog">
      <Box sx={Styles.dialogContent}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={Styles.dialogText}>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)}>OK</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default AlertDialog;
