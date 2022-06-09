import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface SearchProps {
    label: string;
    set_search?: any;
}
export default function Searchme(props:SearchProps) 
{
    return (
        <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "43ch" },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label={props.label} variant="outlined" onChange={(e)=>{
                props.set_search(e.target.value)}}/>

        </Box>
    );
}
