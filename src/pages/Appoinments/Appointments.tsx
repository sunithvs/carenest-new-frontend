import ProminentAppBar from "../../components/Text";
import ButtonBases from "../../components/onlineoffline";
import BasicTextFields from "../../components/search";
import MultiActionAreaCard from "../../components/doctorcard";

export const Appointments = () => 
{
    return (
        <>
            <ProminentAppBar name={"Appointments"}/>
            <ButtonBases/>

            <BasicTextFields label={"hi"}/>
            <MultiActionAreaCard/>
            <br/>
            <MultiActionAreaCard/>

            <br/>

        </>
    );
};
