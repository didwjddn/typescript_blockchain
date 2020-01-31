import * as CryptoJS from "crypto-js";
// class Human {
// public name: string;
// public age: number;
// public gender: string;
// constructor(name: string, age:number, gender: string){
//     this.name = name;
//     this.age =age;
//     this.gender =gender;
// }

// }


// const lynn  = new Human("asdf",10,"asdfasdf");


// const sayHi= (person:Human): string => {
//     return `hello ${person.name},you are ${person.age}, you are a ${person.gender}`
// };
// console.log(sayHi(lynn));

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;


    static calculateBlockHash = (index: number,previousHash:string,timestamp:number,
         data:string):string =>CryptoJS.SHA256(index+previousHash+timestamp+data).toString();


    constructor(index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
        )
        {
            this.index = index;
            this.hash = hash;
            this.previousHash = previousHash;
            this.data = data;
        }
}


const genesisBlock:Block =new Block(0, "20202020202002",'',"hello",123456);

let blockchain: Block[] = [genesisBlock];

console.log(blockchain);

const getBlockchain =():Block[]=>blockchain;

const getLatestBlock = ():Block => blockchain[blockchain.length-1];

const getNewTimeStamp = ():number => Math.round(new Date().getTime()/1000);

export {};