export interface ListInterface {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    }
}

export interface ListResponseInterface {  
    count: number;
    next: string;
    prev: string;
    results: ListInterface[];
}