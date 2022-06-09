import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

interface LabreportProps{
  docname:string;
  files:string;
  fileimage:any;
}
export default function Labreport(props:LabreportProps) 
{
    const theme = useTheme();

    return (
        <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                        {props.docname}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.files}
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 51 }}
                image={props.fileimage}
            />
        </Card>
    );
}
