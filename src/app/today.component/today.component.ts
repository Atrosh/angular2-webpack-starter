/**
 * Created by vladr on 20.12.2016.
 */
import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../api.service";

@Component({
  selector: 'today',
  template: `
<h5>Сегодня:</h5>
  <div class="list-group">
    <a *ngFor="let l of lessons" class="list-group-item list-group-item-action">
      <h5 class="list-group-item-heading"> {{l?.date | date: 'HH:mm'}}, {{l?.course?.name}}, {{l?.info}}</h5>
      <p class="list-group-item-text">{{l?.task}}</p>
    </a>
  </div>
  `
})

export class TodayComponent {

  lessons: Observable<any>;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getLessons().subscribe(
      data => this.lessons = data,
      error => console.log(error)
    );
  }
}
