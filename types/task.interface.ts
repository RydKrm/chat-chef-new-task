

// export interface taskInterFace {
//     _id: number; 
//     name:string,
//     complete:boolean,
//     category:string,
//     description:string
// }[];

export interface taskSingleInterFace {
    _id: number;
    name: string,
    complete: boolean,
    category: string,
    description: string
};

export interface taskInterFace extends taskSingleInterFace { }[];

export type emptyFunction = () => void;

export interface categoryInterface {
    _id: number;
    category: string;
}