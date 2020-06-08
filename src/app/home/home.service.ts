import { IResponseTasks } from './../models/i-response-tasks';
import { App } from './../shared/app.enum';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { ITaskWeek } from '../models/i-task-week';
import { IResponseTeams } from '../models/i-response-teams';
import { IResponseSprint } from '../models/i-response-sprint';
import { IResponseWorkItems } from '../models/i-response-workItem';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private _http: HttpClient) { }

  getWeek(): Observable<any> {
    const currDate = new Date();
    const week: ITaskWeek[] = [];
    const startDate = currDate.setDate(currDate.getDate() - currDate.getDay());

    for (let i = 0; i <= 13; i++) {
      const date = moment(startDate).add(i, 'days').toDate();
      const day = moment(date).format('dddd');
      const name = moment(date).format('DD');

      if (day !== 'Sunday' && day !== 'Saturday') {
        week.push({ date, day, name });
      }

    }

    const week1 = week.slice(0, 5);
    const week2 = week.slice(5, week.length);

    return of({ 0: week1, 1: week2 });

  }

  getTeams(): Observable<IResponseTeams> {
    const url = `${App.apiUrl}${App.teams}`;
    return this._http.get<IResponseTeams>(url);
  }

  getSprints(teamId: string, projectName: string): Observable<IResponseSprint> {
    const sprintUrl = App.sprint.replace('$Project', projectName).replace('$Team', teamId);
    const url = `${App.apiUrl}${sprintUrl}`;
    return this._http.get<IResponseSprint>(url);
  }

  getWorksId(project: string, team: string, sprint: string): Observable<IResponseWorkItems> {
    const workUrl = App.work.replace('$Project', project).replace('$Team', team).replace('$Sprint', sprint);
    const url = `${App.apiUrl}${workUrl}`;
    return this._http.get<IResponseWorkItems>(url);
  }

  getTasks(project: string, workIds: string): Observable<IResponseTasks> {
    const taskUrl = App.task.replace('$Project', project).replace('$WorkIds', workIds);
    const url = `${App.apiUrl}${taskUrl}`;
    return this._http.get<IResponseTasks>(url);
  }


}
