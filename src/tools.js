const logger = function (output) {
    console.log(output)
}

 export const  appName = "ES6 Primer ";
//export var dummyFunction = function () {
  //  return "I am a dummy function";
//}

export const dummyfunction = () =>{
    return " I am a dummy function";
}
export const genericFunction3 = () => { //declare an object literal
    const personalInformation = {
    
    firstName : 'Pius',
    lastName : 'Onobhayedo',
    gender : 'Male',
    religion : 'Christianity (Catholic)',
     fathersName : 'John', 
     mothersName : 'Patricia'
    }
    //deconstruct into new variables firstName, last name and otherPersonalInfo let {firstName, lastName, ...otherPersonalInfo} = personalInformation;
    return `The first name is ${firstName} and the lastName is ${lastName}.
     Others are: gender = ${otherPersonalInfo.gender}; religion = ${otherPersonalInfo.religion}; etc.`;
    }

export default logger;

export class User extends Person{
    constructor(username, password, firstName, lastName, gender, height){
    super(firstName, lastName, gender, height);
    this.username = username;
    this.password = password;
    }
   }