import ProminentAppBar from "../../components/Text";
import SmallCard from "../../components/smallcard";
import Grid from "@mui/material/Grid";
import blood from "../../../public/images/blood.jpg";
import "./labresult.css";
import weight from "../../../public/images/weight.png";
import Typography from "@mui/material/Typography";
import Labreport from "../../components/labreport";


export const Labresults = () => 
{
    return (
        <>
            <ProminentAppBar name={"Lab results"}/>
            <br />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <SmallCard img={blood} name={"Blood Group"} detail={"A+"}/></Grid>
                <Grid item xs={6}><SmallCard img={weight} name={"Weight"} detail={"80kg"}/></Grid>
            </Grid>
            <br/>
            <Typography variant="h5" gutterBottom component="div">
        Latest Report
            </Typography>
            <Labreport docname={"General Health"} files={"8 files"} fileimage={"../../../public/images/filesicon.jpg"} />
            <Labreport docname={"General Health"} files={"8 files"} fileimage={"../../../public/images/filesicon.jpg"} />

        </>
    );
};
