import {AuthService} from "../auth.service";
import {Component} from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
/**
 * Created by vladr on 21.12.2016.
 */

@Component({
  selector: 'week',
  templateUrl: './week.component.html'
})

export class WeekComponent {

  days: Observable<any>;
  day: any;

  constructor(private auth: AuthService, private api: ApiService) {
  }

  ngOnInit() {
    this.api.getWeek().subscribe(
      data => this.days = data,
      error => console.log(error)
    );
  }

  selectDay(day: any) {
    this.day = day;
  }





}
