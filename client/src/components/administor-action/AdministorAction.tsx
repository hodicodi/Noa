import { Box, Button, CardActionArea, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AdministorActionsProps } from "@shared/src/types/administor.types.ts";
import PersonIcon from "@mui/icons-material/Person";
import { FC } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AdministorAction: FC<AdministorActionsProps> = ({ name, path }) => {
    const navigate = useNavigate();

  const handleManageClick = () => {
    navigate(path);
  };

  return (
    <Card sx={{ minWidth: 415, height: 100, backgroundColor: "#47025c", color: "#ffffff" }}>
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
