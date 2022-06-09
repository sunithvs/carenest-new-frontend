import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

interface HomenursecardProps{
  nursename:string;
  distanceaway:string;
  pateintstreated:string;
  nurseimage:any;
}
export default function Homenursecard(props:HomenursecardProps) 
{
    const theme = useTheme();

    return (
        <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                        {props.nursename}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.distanceaway}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.distanceaway}
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 51 }}
                image={props.nurseimage}
            />
        </Card>
    );
}
