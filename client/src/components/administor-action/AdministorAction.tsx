import { Button, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AdministorActionsProps } from "@shared/src/types/administor.types.ts";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./administorAction.style.ts";

const AdministorAction: FC<AdministorActionsProps> = ({ name, path }) => {
    const navigate = useNavigate();

  const handleManageClick = () => {
    navigate(path);
  };

  return (
    <Card sx={Styles.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Button onClick={handleManageClick} size="small"> manage </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AdministorAction;
