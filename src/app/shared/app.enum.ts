export enum App {
    apiUrl = 'https://dev.azure.com/msi-cie/',
    teams = '_apis/teams?api-version=5.1-preview.3',
    sprint = '$Project/$Team/_apis/work/teamsettings/iterations?$timeframe=current&api-version=5.1',
    work = '$Project/$Team/_apis/work/teamsettings/iterations/$Sprint/workitems?api-version=5.1-preview.1',
    task = '$Project/_apis/wit/workitems?ids=$WorkIds&api-version=5.1'
}
