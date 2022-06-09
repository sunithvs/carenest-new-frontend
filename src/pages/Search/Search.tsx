import BasicTextFields from "../../components/search";
import MultiActionAreaCard from "../../components/doctorcard";
import ProminentAppBar from "../../components/Text";

export const Search = () => 
{
    return (
        <>
            <ProminentAppBar name={"Doctor Search"}/>

            <BasicTextFields label={"hi"}/>
            <br/>
            <MultiActionAreaCard/>
            <br/>
            <MultiActionAreaCard/>
        </>
    );
};
