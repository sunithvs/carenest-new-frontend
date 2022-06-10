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
interface  WorkingTime {
    day:number;
    starting_time:string;
    ending_time:string;
}
export class DoctorObject extends ModelObject
{
    id=0;
    name="";
    specialisation="";
    online_mode=false;
    rating=0;
    hospital?:HospitalObject;
    working_time?:WorkingTime[];


    constructor(data: ModelData, baseUrl: string)
    {



        super(data, baseUrl);
        this.fields = ["id", "name", "specialisation", "online_mode", "rating", "doctor_photo", "hospital", "working_time"];
        this.getData();

    }


}

export class HomeNursesObject extends ModelObject
{
    id=0;
    name="";
    experience="";
    availability=false;
    home_nurse_photo="";



    constructor(data: ModelData, baseUrl: string)
    {



        super(data, baseUrl);
        this.fields = ["id", "name", "experience", "availability", "home_nurse_photo"];
        this.getData();

    }


}

export class MedicalHistoryObject extends ModelObject
{
    id=0;
    date="";
    record="";
    prescription_photo="";




    constructor(data: ModelData, baseUrl: string)
    {



        super(data, baseUrl);
        this.fields = ["id", "date", "record", "prescription_photo"];
        this.getData();

    }


}


export class BloodDonationObject extends ModelObject
{
    id=0;
    date="";
    blood_bank_name="";
    blood_bank_location="";
    phone_number1="";
    phone_number2="";




    constructor(data: ModelData, baseUrl: string)
    {



        super(data, baseUrl);
        this.fields = ["id", "date", "blood_bank_name", "blood_bank_location", "phone_number1", "phone_number2"];
        this.getData();

    }


}
interface  TherapyItems {
    name: string;
    physical_therapy_gif: string ;
}
export class PhysicalTherapyObject extends ModelObject
{
    id=0;
    day="";
    items?:TherapyItems[];



    constructor(data: ModelData, baseUrl: string)
    {



        super(data, baseUrl);
        this.fields = ["id", "day","items"];
        this.getData();

    }


}



export class ProfileObject extends ModelObject
{
    id=0;
    name="";
    age="";
    email="";
    phone="";
    blood="";
    weight="";
    image="";




    constructor(data: ModelData, baseUrl: string)
    {



        super(data, baseUrl);
        this.fields = ["id", "name", "age", "email", "phone", "blood", "weight", "image"];
        this.getData();

    }


}


export class PharmasyObject extends ModelObject
{
    id=0;
    name="";
    rating="";
    location="";




    constructor(data: ModelData, baseUrl: string)
    {



        super(data, baseUrl);
        this.fields = ["id", "name", "rating", "location"];
        this.getData();

    }


}
export class LabObject extends ModelObject
{
    id=0;
    name="";
    weight="";
    blood="";
    labreport="";




    constructor(data: ModelData, baseUrl: string)
    {



        super(data, baseUrl);
        this.fields = ["id", "name", "weight", "blood", "labreport"];
        this.getData();

    }


}



export const Hospital = new Model(baseUrl + "/api/hospitals/", HospitalObject);
export const Doctor = new Model(baseUrl + "/api/doctor/", DoctorObject);
export const HomeNurses = new Model(baseUrl + "/api/home_nurses/", HomeNursesObject);
export const MedicalHistory = new Model(baseUrl + "/api/medical_history/", MedicalHistoryObject);
export const BloodDonation = new Model(baseUrl + "/api/blood_donation/", BloodDonationObject);
export const PhysicalTherapy = new Model(baseUrl + "/api/physical_therapy/", PhysicalTherapyObject);
export const Profile = new Model(baseUrl + "/api/physical_therapy/", ProfileObject);
export const Pharmasy = new Model(baseUrl + "/api/physical_therapy/", PharmasyObject);
export const Lab = new Model(baseUrl + "/api/physical_therapy/", LabObject);

export type ModelRegistry = typeof HospitalObject|
    typeof DoctorObject|
    typeof HomeNursesObject|
    typeof MedicalHistoryObject|
    typeof BloodDonationObject|
    typeof PhysicalTherapyObject|
    typeof ProfileObject|
    typeof LabObject|
    typeof PharmasyObject;









