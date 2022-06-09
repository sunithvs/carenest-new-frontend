import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import { Theme } from "@mui/material/styles";

export default function Floatingbutton() 
{
    return (
        <React.Fragment>
            <CssBaseline />

            <GlobalStyles
                styles={(theme) => ({
                    body: { backgroundColor: (theme as Theme).palette.background.paper },
                })}
            />
            <div>


                <Fab
                    color="secondary"
                    sx={{
                        position: "absolute",
                        bottom: (theme) => theme.spacing(2),
                        right: (theme) => theme.spacing(2),
                    }}
                >
                    <AddIcon />
                </Fab>


            </div>
        </React.Fragment>
    );
}
