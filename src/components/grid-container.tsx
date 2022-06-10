import * as React from "react";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import hosp1 from "/public/images/hosp1.png";

import {useNavigate} from "react-router-dom";
// import {Theme} from "@material-ui/styles";


const Item = styled(Paper)(() => ({
    backgroundColor: "#fff",
    textAlign: "center",

}));


export default function BasicGrid()
{
    const navigate = useNavigate();
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={3}>
                <Grid item xs={4} onClick={() => navigate("search")}>
                    <Item>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}

                        Book <br/>Doctor
                    </Item>
                </Grid>
                <Grid item xs={4} onClick={() => navigate("Pharmacy1")}>


                    <Item>Find <br/>Pharmacy</Item>

                </Grid>
                <Grid item xs={4} onClick={() => navigate("find_hospital")}>
                    <Item>Find <br/>Hospitals</Item>

                </Grid>
                <Grid item xs={4} onClick={() => navigate("labresults")}>
                    <Item>Find Test
                        Results</Item>
                </Grid>
                <Grid item xs={4} onClick={() => navigate("medical_history")}>
                    <Item>Medical
                        History</Item>
                </Grid>
                <Grid item xs={4} onClick={() => navigate("search")}>
                    <Item>Verify doctor search
                    </Item>
                </Grid>
                <Grid item xs={4} onClick={() => navigate("find_home_nurse")}>
                    <Item>Find Home
                        Nurses</Item>
                </Grid>
                <Grid item xs={4} onClick={() => navigate("Pharmacy1")}>
                    <Item>Blood
                        Donation nearby</Item>
                </Grid>
                <Grid item xs={4} onClick={() => navigate("Pharmacy1")}>
                    <Item>Physical
                        Therapy</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
