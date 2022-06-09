import ProminentAppBar from "../../components/Text";
import Avatars from "../../components/avatar";
import Textfield from "../../components/textfield";
import Bluebutton from "../../components/bluebutton";



export const Profile = () =>
{
    return (
        <>
            <ProminentAppBar name={"Profile"} />
            <br/>
            <Avatars />
            <br/>
            <Textfield name={"Mobile no."} intext={"9188028312"}/>
            <br/>
            <Textfield name={"Date of Birth"} intext={"19/02/1965"} />
            <br/>
            <Textfield name={"Email ID"} intext={"anuragkashyap@gmail.com"} />
            <br/>
            <Bluebutton />
            <br/>



        </>
    );
};
