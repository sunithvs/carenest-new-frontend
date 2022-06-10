import ProminentAppBar from "../../components/Text";
import Homenursecard from "../../components/homenursecard";



export const Findhomenurse = () =>
{
    return (
        <>
            <ProminentAppBar name={"Find Home Nurse Nearby"} />
            <br/>
            <Homenursecard nursename={"Charlotte Baker"} distanceaway={"150km"} pateintstreated={"150"} nurseimage={""} />
            <br/>

            <Homenursecard nursename={"Thoufeeq"} distanceaway={"10km"} pateintstreated={"50"} nurseimage={""} />

            <br/>

            <Homenursecard nursename={"Charlotte Baker"} distanceaway={"150km"} pateintstreated={"150"} nurseimage={""} />

            <br/>

        </>
    );
};
