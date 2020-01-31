"use strict";
// class Human {
// public name: string;
// public age: number;
// public gender: string;
// constructor(name: string, age:number, gender: string){
//     this.name = name;
//     this.age =age;
//     this.gender =gender;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// }
// const lynn  = new Human("asdf",10,"asdfasdf");
// const sayHi= (person:Human): string => {
//     return `hello ${person.name},you are ${person.age}, you are a ${person.gender}`
// };
// console.log(sayHi(lynn));
class Block {
    constructor(index, hash, previousHash, data, timestage) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
    }
}
const genesisBlock = new Block(0, "20202020202002", '', "hello", 123456);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map