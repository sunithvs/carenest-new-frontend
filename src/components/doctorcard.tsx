import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard() 
{
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="80"
                    image="public/images/docjess1.png"
                    alt="drjessy"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
          Dr. Jessy
                    </Typography>
                    <Typography variant="body2">
          Pediatrician
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
          Make an appointment
                </Button>
            </CardActions>
        </Card>
    );
}
