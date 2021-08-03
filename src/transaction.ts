interface Point {
    x: number;
    y: number;
    z: number;
}

interface Vector3 {
  point0: Point;
  point1: Point;
  point2: Point; 
}

interface Vector4 {
  point0: Point;
  point1: Point;
  point2: Point;
  point3: Point;
}

type Vector = ( Vector3 | Vector4 )

type geometryFunction = <G extends {
    surface: Vector[], 
    // mesh: string,
}>(shape: G) => {}; 

export interface TransactionData{
    geometry: geometryFunction;
    from: string;
    to: string;
    amount: number;
}

export default class Transaction implements TransactionData {
    constructor(
        public geometry: geometryFunction,
        public from: string,
        public to: string,
        public amount: number
    ) {}
}