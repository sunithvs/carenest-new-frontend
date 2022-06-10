import ReactDOM from "react-dom";
import {Workbox} from "workbox-window";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Home} from "./pages/Home/Home";
import {HandleAppState} from "./components/HandleAppState";
import {Search} from "./pages/Search/Search";
import BottomNav from "./components/BottomNav";
import {Profile} from "./pages/Profile/Profile";
import {Appointments} from "./pages/Appoinments/Appointments";
import {Labresults} from "./pages/Labresults/Labresults";
import {Pharmacy1} from "./pages/Pharmacy/Pharmacy1";
import {Pharmacy2} from "./pages/Pharmacy/Pharmacy2";
import {Medicalhistory} from "./pages/MedicalHistory/Medicalhistory";
import {Findhomenurse} from "./pages/FindHomeNurse/Findhomenurse";

import {Findhospitals} from "./pages/Findhospitals/Findhospitals";

const wb = new Workbox("/sw.js");

if (location.hostname !== "localhost" && location.protocol !== "http:" && "serviceWorker" in navigator)
    wb.register().catch(console.error);


function App() 
{
    return (
        <>
            <HandleAppState wb={wb}/>
            <BrowserRouter>
                <Routes>

                    <Route path="/search" element={<div><BottomNav/><Findhospitals/></div>}/>
                    <Route path="/appointment" element={<div><BottomNav/><Appointments/></div>}/>
                    <Route path="/labresults" element={<div><BottomNav/><Labresults/></div>}/>
                    <Route path="/pharmacy1" element={<div><BottomNav/><Pharmacy1/></div>}/>
                    <Route path="/pharmacy2" element={<div><BottomNav/><Pharmacy2/></div>}/>
                    <Route path="/medical_history" element={<div><BottomNav/><Medicalhistory/></div>}/>
                    {/*<Route path="/find_hospital" element={<div><hospitals/></div>}/>*/}
                    <Route path="/find_home_nurse" element={<div><BottomNav/><Findhomenurse/></div>}/>
                    <Route path="/profile" element={<div><BottomNav/><Profile/></div>}/>
                    <Route path="/" element={<div><BottomNav/><Home/></div>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));
