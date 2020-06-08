export interface IResponseTasks {
    count: string;
    value: IResponseValues[];
}

export interface IResponseValues {
    id: string;
    rev: number;
    fields: IFields[];
    url: string;
}

export interface IPerson {
    _link: any;
    id: string;
    uniqueName: string;
    imageUrl: string;
    descriptor: string;
    url: string;
    displayName: string;
}

export interface IFields {
    'System.AreaPath': string;
    'System.TeamProject': string;
    'System.IterationPath': string;
    'System.WorkItemType': string;
    'System.State': string;
    'System.Reason': string;
    'System.AssignedTo': IPerson;
    'System.CreatedDate': string;
    'System.CreatedBy': IPerson;
    'System.ChangedDate': string;
    'System.ChangedBy': IPerson;
    'System.CommentCount': number;
    'System.Title': string;
    'System.BoardColumn': string;
    'System.BoardColumnDone': boolean;
    'Microsoft.VSTS.Common.StateChangeDate': string;
    'Microsoft.VSTS.Common.Priority': number;
    'Microsoft.VSTS.Common.StackRank': number;
    'Microsoft.VSTS.Common.ValueArea': string;
    'WEF_4E7078DD40764226A2B21C991EA41797_Kanban.Column': string;
    'WEF_4E7078DD40764226A2B21C991EA41797_Kanban.Column.Done': boolean;
}

