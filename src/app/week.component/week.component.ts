import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
/**
 * Created by vladr on 21.12.2016.
 */

@Component({
  selector: 'week',
  templateUrl: './week.component.html'
})

export class WeekComponent implements OnInit {

  public days: Observable<any>;
  public day: any;

  constructor(public auth: AuthService, private api: ApiService) {
  }

  public ngOnInit() {
    this.api.getWeek().subscribe(
      (data) => this.days = data,
      (error) => console.log(error)
    );
  }

  public selectDay(day: any) {
    this.day = day;
  }

}
