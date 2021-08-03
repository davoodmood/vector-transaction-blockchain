import Block from './block'
import BlockData from './block'
import { TransactionData } from './transaction';
import sha256 from 'js-sha256'

interface BlockchainData {
    blocks: Array<BlockData>;
    // genesisBlock: BlockData;
    addBlock(block: BlockData): void;
    getNextBlock(transactions: Array<TransactionData>):BlockData;
    getPreviousBlock():BlockData;
    generateHash(block: BlockData): string;
}

export default class Blockchain implements BlockchainData {
    public blocks: Array<BlockData>;
    // public genesisBlock: BlockData;


    constructor(genesisBlock: BlockData ) {
        this.blocks = [];
        this.addBlock(genesisBlock);
    } 

    public addBlock(block: BlockData): void {
        if (this.blocks.length === 0) { 
            block.previousHash = "0x0000000000000000000"
            block.hash = this.generateHash(block);
        }
        this.blocks = [...this.blocks, block]
    }

    public generateHash(block: BlockData): string {
        let hash = sha256(block.key)
        // mining operation
        // ...
        while(!hash.startsWith('7d7')) {
            block.nonce += 1;
            hash =  sha256(block.key);
            console.log(hash)
        }
        return hash
    }

    public getPreviousBlock(): BlockData {
        return this.blocks[this.blocks.length - 1];
    }

    public getNextBlock(transactions: Array<TransactionData>):BlockData {
        let block = new Block();
        transactions.map((transaction: TransactionData) => {
            block.addTransaction(transaction);
        })
        let previousBlock = this.getPreviousBlock();
        block.index = this.blocks.length;
        block.previousHash = previousBlock.hash;
        block.hash =  this.generateHash(block);

        return block
    };
}