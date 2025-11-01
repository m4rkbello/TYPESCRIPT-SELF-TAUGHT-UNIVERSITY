"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//para sa number
let id = 5;
//para sa strings
let programming = "alaw utsbo";
//para sa boolean
let isPatotoya = false;
//para sa  array
let numberRange = [5, 10, 15, 20, 25];
//para sa array, string, boolean, number
let assorted = "qwerty101";
//para sa array, string, boolean, number
let assortedData = [1212, "3434343fdgdfg", true,];
//ADD CONCATENATION MEANS SI PALDO UG PATOTOYA ISUMPAY PALDO PATOTOYA
const concatValue = (a, b) => {
    return a + b;
};
console.log(concatValue("PADAYON LANG", "SAGDI ANG WALAY BILIB"));
const User = {
    id: 1,
    name: "MARK BELLO",
    fnMessage(message) {
        console.log(message);
    }
};
// console.log(User.age); //walay output ni kay wala naka  declaired ang  variable
User.fnMessage("PATOTOYA!");
//# sourceMappingURL=tutorial.js.map