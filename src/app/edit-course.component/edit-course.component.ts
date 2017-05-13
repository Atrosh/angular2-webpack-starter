/**
 * Created by vladr on 30.04.2017.
 */
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Course } from '../models/Course';
import { User } from '../models/User';
import { Unit } from '../models/Unit';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit-course',
  templateUrl: './edit-course.component.html'
})

export class EditCourseComponent implements OnInit {

  public newUnitName: string;
  public course: Course = new Course();
  public units: Unit[] = [];
  public user: User = new User(null);

  constructor(private auth: AuthService, private api: ApiService, private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.api.getCourse(this.route.snapshot.params['id']).subscribe(
      (data) => this.course = data,
      (error) => console.log(error)
    );
    this.getUnits();
  }

  public createCourse() {
    this.api.saveUnits(this.units).subscribe();
    this.api.updateCourse(this.course).subscribe(
      (data) => {
        this.course = data;
        this.getUnits();
      },
      (error) => console.log(error)
    );
  }

  public addUnit(name) {
    this.units.push(new Unit(this.units.length + 1, name, this.course));
  }

  public deleteUnit(deletedUnit: Unit) {
    if (deletedUnit.id > 0) {
      this.api.deleteUnit(deletedUnit.id).subscribe();
    }
    this.units = this.units.filter((unit) => unit !== deletedUnit);
    this.reorderUnits();
  }

  private reorderUnits() {
    let newUnits = [];
    let i = 0;
    this.units.forEach((unit) => {
      i++;
      unit.serial = i;
      newUnits.push(unit);
    });
    this.units = newUnits;
  }

  private getUnits() {
    this.api.getUnits(this.route.snapshot.params['id']).subscribe(
      (data) => this.units = data,
      (error) => console.log(error)
    );
  }
}
