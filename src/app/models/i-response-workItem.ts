export interface ITarget {
    id: string;
    url: string;
}

export interface IWorkItem {
    rel: string;
    source: ITarget;
    target: ITarget;
}

export interface IResponseWorkItems {
    workItemRelations: IWorkItem[];
    url: string;
    _links: any;
}