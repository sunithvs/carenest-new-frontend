import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Button, CardActionArea, CardActions} from "@mui/material";

export default function MultiActionAreaCard() 
{
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image="/public/images/chatbots.png"
                    alt="chatbot"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Hi Aleyna
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        He who has health, has hope; and he who has hope, has everything.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    CHAT
                </Button>
            </CardActions>
        </Card>
    );
}
