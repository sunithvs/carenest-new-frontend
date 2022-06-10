// eslint-disable-next-line import/no-unresolved
import "./index.css";


import {Link} from "react-router-dom";

// eslint-disable-next-line import/no-unresolved
import Givehelp from "public/images/givehelpcard.svg";
// eslint-disable-next-line import/no-unresolved
import Nurse from "public/images/nurse 1.png";
// import SearchUser from "../../images/Male-user-search-icon.png";
// eslint-disable-next-line import/no-unresolved
import Ambulanceimg from "public/images/ambulance 1.png";
// eslint-disable-next-line import/no-unresolved
import Medicine from "public/images/Medicine.svg";
// eslint-disable-next-line import/no-unresolved
import Doc from "public/images/Doc.svg";
// eslint-disable-next-line import/no-unresolved
import Laboratory from "public/images/laboratory 1.png";
// eslint-disable-next-line import/no-unresolved
import BloodBank from "public/images/blood-bank 1.png";
// eslint-disable-next-line import/no-unresolved
import request from "public/images/helphand.svg";
// eslint-disable-next-line import/no-unresolved
import hosp1 from "public/images/hosp1.png";

export const NineCards =()=>(
    <>
        <div>
            <div className="container d-flex justify-content-between  p-0 align-self-center px-2">
                <Link style={{textDecoration:"none"}} className="homecard" to="/find_hospital">
                    <div>
                        <img src={hosp1} alt=""/>
                        <div className="cardtxt ">Hospital</div>
                    </div>
                </Link>
                {/*<Link style={{textDecoration:"none"}} className="homecard" to="/searchuser">*/}
                {/*    <img style={{width: "3.5rem"}} src={SearchUser} alt=""/>*/}
                {/*    <div style={{marginTop: "0"}} className="cardtxt ">Search User</div>*/}
                {/*</Link>*/}
                <Link style={{textDecoration:"none"}} className="homecard" to="/search">
                    <div >
                        <img src={Doc} alt=""/>
                        <div className="cardtxt m-0">Doctor</div>
                    </div>
                </Link>
                <Link style={{textDecoration:"none"}} className="homecard" to="/labresults">
                    <div className="homecard">
                        <img src={Laboratory} alt=""/>
                        <div className="cardtxt ">Laboratory</div>
                    </div>
                </Link>
            </div>

        </div>
        <div>

            <div className="container d-flex justify-content-between my-2 p-0 align-self-center px-2">

                <Link style={{textDecoration:"none"}} className="homecard" to="/search">
                    <div >
                        <img src={request} alt=""/>
                        <div className="cardtxt m-0">Blood donation</div>
                    </div>
                </Link>

                <Link style={{textDecoration:"none"}} className="homecard" to="/search">
                    <div>
                        <img src={Givehelp} alt=""/>
                        <div className="cardtxt ">Verify doctor</div>
                    </div>
                </Link>

                <Link style={{textDecoration:"none"}} className="homecard" to="/find_home_nurse">
                    <div >
                        <img src={Nurse} alt=""/>
                        <div className="cardtxt m-0">Nurse</div>
                    </div>
                </Link>

            </div>

        </div>
        <div>

            <div className="container d-flex justify-content-between  p-0 align-self-center px-2">

                <div className="homecard">
                    <img src={Medicine} alt=""/>
                    <div className="cardtxt ">Pharmacy</div>
                </div>

                <div className="homecard">
                    <img src={BloodBank} alt=""/>
                    <div className="cardtxt ">Blood Bank</div>
                </div>

                <Link style={{textDecoration:"none"}} className="homecard" to="/search">
                    <img src={Ambulanceimg} alt=""/>
                    <div className="cardtxt ">Physiotherapy</div>
                </Link>

            </div>

        </div>
    </>
);
