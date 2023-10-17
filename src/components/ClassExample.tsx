/*
6) Classes with Access Modifiers:
Description: TypeScript supports class-based object-oriented programming. You can use access modifiers like public, private, and protected to control the visibility of class members. 

// TypeScript Code
class Animal {
  private species: string;
  constructor(species: string) {
    this.species = species;
  }
  greet() {
    return `Hello, I'm a ${this.species}!`;
  }
}
const cat = new Animal("Cat");
console.log(cat.greet()); // Access to 'species' is restricted (private)

*/
