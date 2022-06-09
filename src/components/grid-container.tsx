import * as React from "react";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import {Theme} from "@material-ui/styles";

const Item = styled(Paper)(() => ({
    backgroundColor: "#fff",
    textAlign: "center",

}));

export default function BasicGrid() 
{
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Item> Book
                        Doctor
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>Pharmacy</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>Hospitals</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>Find Test
                        Results</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>Medical
                        History</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>Verify doctor search
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>Find Home
                        Nurses</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>Blood
                        Donation nearby</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>Physical
                        Therapy</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
