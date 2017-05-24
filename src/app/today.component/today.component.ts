/**
 * Created by vladr on 20.12.2016.
 */
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Lesson } from '../models/Lesson';
import { AuthService } from '../auth.service';

@Component({
  selector: 'today',
  templateUrl: './today.component.html'
})

export class TodayComponent implements OnInit {

  public lessons: Lesson[] = [];

  constructor(public auth: AuthService, private api: ApiService) {
  }

  public ngOnInit() {
    this.api.getLessons().subscribe(
      (data) => this.lessons = data,
      (error) => console.log(error)
    );
  }
}
