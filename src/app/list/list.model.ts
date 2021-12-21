export interface ListInterface {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    }
}

export interface CompleteListResponse {  
    count: number;
    next: string;
    prev: string;
    results: UrlList[] 
}

export interface UrlList {
    name: string;
    url: string;
}