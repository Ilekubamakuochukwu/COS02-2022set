// Define the interface for PersonData
export interface PersonData {
  firstName: string;
  lastName: string;
  gender: string;
  height?: number; // Optional height property
  hobbies: string[];
  birthday?: Date; // Optional birthday property
  isAlive: boolean;
}

// Define the Person class
export class Person {
  // Declare property types
  firstName: string;
  lastName: string;
  gender: string;
  height: number;
  hobbies: string[];
  birthday: Date;
  isAlive: boolean;

  constructor(personData: PersonData) {
    // Initialize class properties with data from PersonData
    this.firstName = personData.firstName;
    this.lastName = personData.lastName;
    this.gender = personData.gender;
    this.height = personData.height || 0; // Use 0 if height is not provided
    this.hobbies = personData.hobbies;
    this.birthday = personData.birthday || new Date(); // Use current date if birthday is not provided
    this.isAlive = personData.isAlive;
  }
}

// Define the log function
export const log = (message: string) => {
  console.log(message);
};
