/**
 * Created by vladr on 30.04.2017.
 */
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Step } from '../models/Step';
import { Paragraph } from '../models/Paragraph';

@Component({
  selector: 'edit-paragraph',
  templateUrl: './edit-paragraph.component.html'
})

export class EditParagraphComponent implements OnInit {

  public editStep: Step = new Step(null, null);
  public paragraph: Paragraph = new Paragraph(null, null, null);
  public steps: Step[] = [];

  constructor(private auth: AuthService, private api: ApiService, private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.api.getParagraph(this.route.snapshot.params['id']).subscribe(
      (data) => this.paragraph = data,
      (error) => console.log(error)
    );
    this.getSteps();
  }

  public saveParagraph() {
    this.api.saveSteps(this.steps).subscribe();
    this.api.updateParagraph(this.paragraph).subscribe(
      (data) => {
        this.paragraph = data;
        this.getSteps();
      },
      (error) => console.log(error)
    );
  }

  public addStep() {
    this.editStep = new Step(this.steps.length + 1, this.paragraph);
    this.steps.push(this.editStep);
  }

  public deleteStep(deletedStep: Step) {
    if (deletedStep.id > 0) {
      this.api.deleteStep(deletedStep.id).subscribe();
    }
    this.steps = this.steps.filter((step) => step !== deletedStep);
    this.editStep = new Step(null, null);
    this.reorderSteps();
  }

  private reorderSteps() {
    let newSteps = [];
    let i = 0;
    this.steps.forEach((step) => {
      i++;
      step.serial = i;
      newSteps.push(step);
    });
    this.steps = newSteps;
  }

  private getSteps() {
    this.api.getSteps(this.route.snapshot.params['id']).subscribe(
      (data) => this.steps = data,
      (error) => console.log(error)
    );
  }
}
