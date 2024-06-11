/* //console.log("Starting ES6 and above");
import log,{appName as am, dummyFunction as af} from './tools.js'

log("Starting ES6 and above with modularity");
//arrow function


log("Welcome! The application name is " + am + ". There is a function that returns " +df() );
log("Welcome! The application name is " ${am} ". \n
There is a function that returns " ${df()}"); */


export class User extends Person{
    constructor(username, password, firstName, lastName, gender, height){
    super(firstName, lastName, gender, height);
    this.username = username;
    this.password = password;
    }
   }


new Promise((resolve, reject) => {
    setTimeout(()=>{
    resolve("Timeout is over"); //send out a success feedback with data using resolve
    }, 1000) //set timeout for 1000ms i.e. 1second.
    }).then((data) => {
    log(`${data}`);//This should output "Timeout is over"
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
    log(`${error}`);
    }); 
    //Let us still maintain the last log statement so that we can illustrate better how the asynchronous call that returns after the timeout does not stop the main execution thread.
let user1 = new User("myusername","mypassword","Pius","Onobhayedo","Male",undefined);
log(`The username of ${user1.firstName} is ${user1.username}`)