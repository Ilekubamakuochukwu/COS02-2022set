import { log } from './tools'; // Import the log function
import { Person, PersonData } from './tools'; // Import Person class and PersonData interface

// Define person data
let person1Data: PersonData = {
  firstName: "Pius",
  lastName: "Onobhayedo",
  gender: "Male",
  height: 1.5, // Note: Provide height as a number, not a string
  hobbies: [],
  birthday: new Date(1900, 10, 10),
  isAlive: true
};

let person2Data: PersonData = {
  firstName: "Mary",
  lastName: "Joseph",
  gender: "Female",
  hobbies: ['Work', 'Pray', 'Play'],
  isAlive: true
};

// Create Person objects
let person1 = new Person(person1Data);
let person2 = new Person(person2Data);

// Log information about the persons
log(`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is ${person1.birthday.toLocaleDateString()}`);
log(`Person 1 is ${person1.firstName} whose height is ${person1.height}
and birthday is ${person1.birthday.toLocaleDateString()} and hobbies are ${person1.hobbies.length == 0 ? 'not yet set' : person1.hobbies.join(', ')}. <br/>
Person 2 is ${person2.firstName} whose height is ${person2.height} and hobbies are ${person2.hobbies.length == 0 ? 'not yet set' : person2.hobbies.join(', ')}`);
