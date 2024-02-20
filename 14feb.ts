// Union Types Example

// Variable can be either a string or a number
let age: string | number;

// Assigning values
age = '25';
console.log(age); // Output: 25

age = 25;
console.log(age); // Output: 25

// Function parameter can accept string or number
function printValue(value: string | number): void {
  console.log(value);
}

printValue('Hello'); // Output: Hello
printValue(42);      // Output: 42

// Intersection Types Example

interface Name {
    firstName: string;
    lastName: string;
  }
  
  interface Age {
    age: number;
  }
  
  // Combined type with both Name and Age
  type Person = Name & Age;
  
  // Function that accepts a Person object
  function printPerson(person: Person): void {
    console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
  }
  
  // Creating a Person object
  const john: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
  
  // Calling the function
  printPerson(john); // Output: Name: John Doe, Age: 30
  