import Blockchain from "./blockchain";
import Block from "./block";
import Transaction from "./transaction";

// create a genesis block
let block = new Block();

// initialize the blockchain
let blockchain = new Blockchain(block)

// create a sample vector transaction content
const surface = [
    {
        point0: { x: 1, y: 1, z: 1},
        point1: { x: 0, y: 0, z: 0},
        point2: { x: -1, y: -1, z: -1}
    }
];
let transaction = new Transaction((surface) => {
    return surface // TBD - returning the surface mesh for now
}, 'user1', 'user2', 27)


// mining the block
let newBlock = blockchain.getNextBlock([transaction]);
blockchain.addBlock(newBlock);

console.log(blockchain);