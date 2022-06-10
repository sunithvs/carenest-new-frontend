// import BasicTextFields from "../../components/search";

import ProminentAppBar from "../../components/Text";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import d1 from "../../../public/images/d1.jpg";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import d2 from "../../../public/images/d2.jpg";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import d3 from "../../../public/images/d3.jpg";
import Manythingscard from "../../components/manythingscard";



export const Search = () => 
{

    return (
        <>

            <ProminentAppBar name={"Doctor Search"}/>

            {/*<BasicTextFields label={"Search Doctors"}/>*/}
            <br/>
            <Manythingscard name={"Dr.Jessy"} button={"Make an appointment"} details={"Pediatrician"} img={"d1"} />
            <br/>
            <Manythingscard name={"Dr.Lissy"} button={"Make an appointment"} details={"Gynacologist"} img={"d2"} />
            <br/>
            <Manythingscard name={"Dr.Nimmy"} button={"Make an appointment"} details={"Dentist"} img={"d3"} />
            <br/>
        </>
    );
};
