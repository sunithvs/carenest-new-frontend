import ProminentAppBar from "../../components/Text";
import ButtonBases from "../../components/onlineoffline";
import Manythingscard from "../../components/manythingscard";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import d1 from "../../../public/images/d1.jpg";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import d2 from "../../../public/images/d2.jpg";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import d3 from "../../../public/images/d3.jpg";


export const Appointments = () => 
{
    return (
        <>
            <ProminentAppBar name={"Appointments"}/>
            <ButtonBases/>
            <br/>
            <Manythingscard name={"Dr.Jessy"} button={"Make an appointment"} details={"Pediatrician"} img={"d1"} />
            <br/>
            <Manythingscard name={"Dr.Lissy"} button={"Make an appointment"} details={"Gynacologist"} img={"d2"} />
            <br/>
            <Manythingscard name={"Dr.Nimmy"} button={"Make an appointment"} details={"Dentist"} img={"d3"} />
            <br/>


            <br/>

        </>
    );
};
