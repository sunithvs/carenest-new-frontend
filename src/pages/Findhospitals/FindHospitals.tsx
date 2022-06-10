import ProminentAppBar from "../../components/Text";
import {Hospital, HospitalObject} from "../../api/model";
import FindHospital from "../../components/findhospital";
// import Searchme from "../../components/search";
import {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";


export const FindHospitals = () => {
    const [hospitals, set_hospitals] = useState();
    const [search, set_search] = useState("");
    const get_hospitals = async () => {
        Hospital.filter({search: search}).then((hosps) => {
            set_hospitals(hosps.results);
            // console.log(hosps);
        });
    };
    // useEffect(() => {
    //     get_hospitals().then(r => () => {
    //         console.log(r)
    //     });
    // });
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <ProminentAppBar name={"Find Hospitals Nearby"}/>
            <Box
                component="form"
                sx={{
                    "& > :not(style)": {m: 1, width: "43ch"},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="search" variant="outlined" onChange={(e) => {
                    set_search(e.target.value);    get_hospitals().then(r => () => {
            console.log(r)
        });
                }}/>
            </Box>

            { hospitals && hospitals.map((hosp: HospitalObject) => (
                <div key={hosp.id}>
                    <FindHospital name={hosp.name} location={hosp.location} phone_number1={hosp.phone_number1}
                                  phone_number2={hosp.phone_number2} img={hosp.hospital_photo}/>

                    <br/>
                </div>)
            )}


        </>
    );
};
