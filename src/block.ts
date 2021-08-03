import { TransactionData } from './transaction'

interface GenesisBlock {
    index: number;
    hash: string;
    previousHash: string;
    nonce: number;
    transactions: Array<TransactionData>;
    key: string;
}

export default class Block implements GenesisBlock {
    constructor(
        public index: number = 0,
        public hash: string= ``,
        public previousHash: string = ``,
        public nonce: number = 0,
        public transactions: TransactionData[] = []
    ) {}

    get key(): string {
        return JSON.stringify(this.transactions) + this.index + this.previousHash + this.nonce;
    }

    public addTransaction(transaction: TransactionData): void {
        this.transactions = [...this.transactions, transaction]
    };
}