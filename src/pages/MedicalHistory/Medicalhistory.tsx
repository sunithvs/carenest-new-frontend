import ProminentAppBar from "../../components/Text";
import Floatingbutton from "../../components/floatingbutton";
import {useNavigate} from "react-router-dom";


export const Medicalhistory= () =>
{
    const navigate = useNavigate();
    return (
        <>

            <ProminentAppBar name={"Medical history"} />
            <br/>
            <Floatingbutton />

        </>
    );
};
