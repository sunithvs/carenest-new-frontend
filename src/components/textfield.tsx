import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


interface TextFieldProps{
    name:string;
    intext:string;
}
export default function Textfield(props:TextFieldProps) 
{
    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "43ch" },
            }}
            noValidate
            autoComplete="off"
        >
            <div>

                <TextField
                    id="outlined-read-only-input"
                    label={props.name}
                    defaultValue={props.intext}
                    InputProps={{
                        readOnly: true,
                    }}
                />

            </div>
        </Box>
    );
}
