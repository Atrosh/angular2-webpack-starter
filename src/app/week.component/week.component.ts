import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Lesson } from '../models/Lesson';
/**
 * Created by vladr on 21.12.2016.
 */

@Component({
  selector: 'week',
  templateUrl: './week.component.html'
})

export class WeekComponent implements OnInit {

  public days: Observable<any>;
  public day: Lesson[];
  public week: number = 0;

  constructor(public auth: AuthService, private api: ApiService) {
  }

  public ngOnInit() {
    this.getWeek(this.week);
  }

  public selectDay(day: any) {
    this.day = day;
  }

  public getNext() {
    this.day = null;
    this.getWeek(++this.week);
  }

  public getPrevious() {
    this.day = null;
    this.getWeek(--this.week);
  }

  public getCurrent() {
    this.day = null;
    this.week = 0;
    this.getWeek(this.week);
  }

  public deleteLesson(lesson) {
    this.api.deleteLesson(lesson.id).subscribe();
    this.day = this.day.filter((l) => l !== lesson);
  }

  private getWeek(week) {
    this.api.getWeek(week).subscribe(
      (data) => this.days = data,
      (error) => console.log(error)
    );
  }

}
