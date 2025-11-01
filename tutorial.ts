//para sa number
let id: number = 5;

//para sa strings
let programming: string = "alaw utsbo";

//para sa boolean
let isPatotoya: boolean = false;

//para sa  array
let numberRange: number[] = [5,10,15,20,25];

//para sa array, string, boolean, number
let assorted: any = "qwerty101";

//para sa array, string, boolean, number
let assortedData:  any[] = [1212,"3434343fdgdfg",true,];

//ADD CONCATENATION MEANS SI PALDO UG PATOTOYA ISUMPAY PALDO PATOTOYA
const concatValue = (a: string, b: string): string =>{
    return a + b;
};

console.log(concatValue("PADAYON LANG", "SAGDI ANG WALAY BILIB"));


//ADD INTERFACE SA AS BLUE PRINT OR BLUEMAP 
interface userInterface{
    id: number,
    name: string,
    age?: number, //pasabot ani kay optional
    fnMessage(mnessage: string): void;
}

const User = {
    id:  1,
    name: "MARK BELLO",
    fnMessage(message: string): void{
        console.log(message);
    }
};

// console.log(User.age); //walay output ni kay wala naka  declaired ang  variable
User.fnMessage("PATOTOYA!");

