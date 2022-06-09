import Model, {baseUrl, ModelData,  ModelObject} from "./api";


export class HospitalObject extends ModelObject
{
    id=0;
    name="";
    location="";
    phone_number1="";
    phone_number2="";
    hospital_photo="";



    constructor(data: ModelData, baseUrl: string)
    {



        super(data, baseUrl);
        this.fields = ["id", "name", "location", "phone_number1", "phone_number2", "hospital_photo"];
        this.getData();

    }


}




export const Hospital = new Model(baseUrl + "/api/hospital/", HospitalObject);

export type ModelRegistry = typeof HospitalObject;

