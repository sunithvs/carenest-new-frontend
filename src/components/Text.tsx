import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";

import Fab from "@mui/material/Fab";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import {useNavigate} from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    color: "black",
    // Override media queries injected by theme.mixins.toolbar
    "@media all": {
        minHeight: 50
    }
}));
interface ProminentAppBarProps {
  name: string;
}
export default function ProminentAppBar(props: ProminentAppBarProps) 
{
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledToolbar>
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                        <Fab size="small">
                            <ArrowBackRoundedIcon onClick={() => navigate("/")}/>
                        </Fab>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, alignSelf: "flex-end" }}
                    >
                        {props.name}
                    </Typography>
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}
