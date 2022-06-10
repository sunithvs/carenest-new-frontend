import ProminentAppBar from "../../components/Text";
import {Hospital} from "../../api/model";
import Findhospital from "../../components/findhospital";
import Searchme from "../../components/search";
import {useState,useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";




export const Findhospitals = () => 
{
    const [hospitals,set_hospitals]  = useState();
    const [search,set_search]  = useState({});
    const get_hospitals = async () =>
    {
        Hospital.filter({search: search}).then((hosps:Hospital[]) =>
        {
            set_hospitals(hosps);
            console.log(hosps);
        });
    };
    useEffect(() =>
    {
         get_hospitals().then(r => ()=>{console.log(r)});
    });
    return (
        <>
            <ProminentAppBar name={"Find Hospitals Nearby"}/>
             <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "43ch" },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label={props.label} variant="outlined" onChange={(e)=>{
                set_search(e.target.value)}}/>

        </Box>

            <Findhospital name={"Lourdes Hospitals"} location={"Ernakulam"} phone_number1={"2381273891"}
                phone_number2={"473824822"} img={"public/images/h1.jpg"} />

            <br/>
            <Findhospital name={"Lissie Hospitals"} location={"Ernakulam"} phone_number1={"2381273891"}
                phone_number2={"473824822"} img={"public/images/h2.jpg"} />
            <br/>
            <Findhospital name={"Appolo Hospitals"} location={"Ernakulam"} phone_number1={"2381273891"}
                phone_number2={"473824822"} img={"public/images/h3.jpg"} />
            <br/>

        </>
    );
};
