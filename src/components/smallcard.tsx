import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface SmallcardProps{
  img: any;
  name: string;
  detail: string;
}
export default function SmallCard(props:SmallcardProps) 
{
    return (
        <div>

            <Card sx={{ maxWidth: 205 }} className="smallcard">
                <CardMedia className="cardimg"
                    component="img"
                    height="100"
                    image={props.img}
                    alt="image"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {props.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.detail}
                    </Typography>

                </CardContent>

            </Card></div>
    );
}
