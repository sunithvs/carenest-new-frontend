import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Avatars() 
{
    return (
        <Stack direction="column" spacing={2}>
            <Avatar alt="Remy Sharp" src="public/images/anurag.jpg" /><br />
            <h3>Anurag, 57</h3>
        </Stack>
    );
}

