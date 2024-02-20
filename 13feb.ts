// NamespaceExample.ts

namespace MyNamespace {
    export interface Person {
      name: string;
      age: number;
    }
  
    export function greet(person: Person): string {
      return `Hello, ${person.name}! You are ${person.age} years old.`;
    }
  }
  
  // Usage
  const person: MyNamespace.Person = { name: 'John', age: 25 };
  const greeting = MyNamespace.greet(person);
  console.log(greeting);

  // ModuleExample.ts

export interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  export function displayProduct(product: Product): string {
    return `Product: ${product.name}, Price: $${product.price}`;
  }
  