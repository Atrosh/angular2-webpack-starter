import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Course } from '../models/Course';
import { ActivatedRoute } from '@angular/router';
import { Step } from '../models/Step';
import { Progress } from '../models/Progress';
/**
 * Created by vladr on 21.12.2016.
 */

@Component({
  selector: 'course',
  templateUrl: './course.component.html'
})

export class CourseComponent implements OnInit {

  public course: Course = new Course();
  public steps: Step[] = [];
  public progresses: any[] = [];
  public currentStep: Step;
  public progress: Progress;
  public finished: boolean = false;

  constructor(private api: ApiService, private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.api.getCourse(this.route.snapshot.params['id']).subscribe(
      (data) => this.course = data,
      (error) => console.log(error)
    );
    this.getSteps();
    this.getProgresses();
  }

  public isFinished() {
    return this.progresses.length === this.steps.length;
  }

  public isPassed(step: Step) {
    return this.progresses.find((p) => p.step.id === step.id);
  }

  public hasNext() {
    let i = this.steps.indexOf(this.currentStep);
    return this.steps.length > i;
  }

  public hasPrevious() {
    let i = this.steps.indexOf(this.currentStep);
    return 0 !== i;
  }

  public getNext() {
    if (!this.isPassed(this.currentStep)) {
      this.api.saveProgress(new Progress(this.currentStep)).subscribe(
        (data) => this.progresses.push(data),
        (error) => console.log(error)
      );
    }
    let i = this.steps.indexOf(this.currentStep);
    if (this.steps.length > i + 1) {
      this.currentStep = this.steps[i + 1];
    } else {
      if (this.steps.length === this.progresses.length) {
        this.finished = true;
      }
    }
  }

  public getPrevious() {
    let i = this.steps.indexOf(this.currentStep);
    this.currentStep = this.steps[i - 1];
  }

  private getSteps() {
    this.api.getCourseSteps(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.steps = data;
        this.currentStep = this.steps[0];
      },
      (error) => console.log(error)
    );
  }

  private getProgresses() {
    this.api.getCourseProgress(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.progresses = data;
        this.getPassedTest();
      },
      (error) => console.log(error)
    );
  }

  private getPassedTest() {
    this.steps.forEach((s) => {
      if (this.isPassed(s)) {
        this.currentStep = s;
      }
    });
  }

}
