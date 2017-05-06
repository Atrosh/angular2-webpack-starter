/**
 * Created by vladr on 20.12.2016.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'today',
  templateUrl: './today.component.html'
})

export class TodayComponent implements OnInit {

  private lessons: Observable<any>;

  constructor(private api: ApiService) {
  }

  public ngOnInit() {
    this.api.getLessons().subscribe(
      (data) => this.lessons = data,
      (error) => console.log(error)
    );
  }
}
