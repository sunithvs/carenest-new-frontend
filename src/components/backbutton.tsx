import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

export default function Backbutton() 
{
    return (
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab size="small">
                <ArrowBackRoundedIcon />
            </Fab>
        </Box>
    );
}
