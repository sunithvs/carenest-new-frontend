import ProminentAppBar from "../../components/Text";
import Manythingscard from "../../components/manythingscard";



export const Pharmacy2 = () =>
{
    return (
        <>

            <ProminentAppBar name={" Pharmacies"}/>
            <br/>
            <Manythingscard name={"We care Medi"} details={"Near SOE old block,CUSAT,5 KM nearby"} button={"Order Here"} img={"public/images/ph1.jpg"}/>
            <br/>

            <Manythingscard name={"Daya Medicines"} details={"Near SOE new block,CUSAT,750m nearby"} button={"Order Here"} img={"public/images/ph2.jpg"}/>
            <br/>

            <Manythingscard name={"Mission MediCare"} details={"Near Hindi block,CUSAT,15 KM nearby"} button={"Order Here"} img={"public/images/ph3.jpg"}/>

        </>
    );
};
