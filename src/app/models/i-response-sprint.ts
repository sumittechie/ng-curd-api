export interface ISprint {
    id: string;
    name: string;
    path: string;
    attributes: any;
    url: string;
}

export interface IResponseSprint {
    count: number;
    value: ISprint[] | ISprint;
}