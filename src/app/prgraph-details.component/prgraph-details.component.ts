/**
 * Created by vladr on 20.05.2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Paragraph } from '../models/Paragraph';
import { Step } from '../models/Step';

@Component({
  selector: 'paragraph-details',
  templateUrl: './prgraph-details.component.html'
})

export class ParagraphDetailsComponent implements OnInit {

  @Input() public paragraph: Paragraph;
  public steps: Step[] = [];

  constructor(private api: ApiService) {
  }

  public ngOnInit() {
    this.api.getSteps(this.paragraph.id).subscribe(
      (data) => this.steps = data,
      (error) => console.log(error)
    );
  }

}
