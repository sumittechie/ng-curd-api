import { IResponseWorkItems, IWorkItem } from './../models/i-response-workItem';
import { ITaskWeek } from './../models/i-task-week';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Subscription, zip, of } from "rxjs";
import { HomeService } from "./home.service";
import { LoginService } from "../login/login.service";
import { ITeams } from "../models/i-teams";
import { delay, switchMap, mergeMap, map, flatMap, mapTo } from "rxjs/operators";
import { IResponseSprint, ISprint } from '../models/i-response-sprint';
import { IResponseTasks, IResponseValues } from '../models/i-response-tasks';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  isLoading = true;
  selectedWeek = '1';
  form: FormGroup;
  subscriptions = [];
  teams: ITeams[] = [];
  weeks: any[] = [];
  tasks: IResponseValues[] = [];

  constructor(
    private _fb: FormBuilder,
    private _service: HomeService,
    private _loginService: LoginService,
    private _cdRef: ChangeDetectorRef
  ) { }

  private initForm() {
    this.form = this._fb.group({
      team: ['']
    });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.initForm();

    this.subscriptions.push(
      zip(this._service.getWeek(), this._service.getTeams())
        .pipe(delay(5000))
        .subscribe(result => {
          this.weeks = result[0];
          this.teams = result[1].value.sort(this.sortFn);
          this.isLoading = false;
        })
    );

    this.subscriptions.push(
      this.form.get('team').valueChanges.subscribe((data: ITeams) => {
        this.isLoading = true;
        this.loadData(data);
      })
    );
  }

  private sortFn(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;

  }

  private loadData(team: ITeams) {
    const getTaskData = this._service.getSprints(team.name, team.projectName)
      .pipe(switchMap((data: IResponseSprint) => {
        const sprint: ISprint = data.value[0];
        return this._service.getWorksId(team.projectName, team.id, sprint.id)
          .pipe(switchMap((workItems: IResponseWorkItems) => {
            const workIds: string[] = [];
            if (workItems) {
              workItems.workItemRelations.forEach((workItem: IWorkItem) => {
                if (workItem.source === null) {
                  workIds.push(workItem.target.id);
                }
              });
            }
            return this._service.getTasks(team.projectName, workIds.join(','));
          }));
      }));

    this.subscriptions.push(
      getTaskData.subscribe((data: IResponseTasks) => {
        console.log(data);
        this.tasks = data.value;
        this.isLoading = false;
      })
    );
  }

  onWeekChange(week: string): void {
    this.selectedWeek = week;
  }

  onLogout(): void {
    this._loginService.logout();
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.forEach((item: Subscription) => item.unsubscribe());
    }
  }
}
