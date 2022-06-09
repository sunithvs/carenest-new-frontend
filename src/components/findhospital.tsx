import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

interface ManyThingsCardProps{
    name:string;
    location:string;
    phone_number1:string;
    phone_number2:string;
    img:any;
}
export default function Findhospital(props:ManyThingsCardProps) 
{
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.location}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {props.phone_number1}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.phone_number2}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

            </CardActions>
        </Card>
    );
}
