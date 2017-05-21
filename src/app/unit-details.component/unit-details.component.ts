/**
 * Created by vladr on 20.05.2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import { Unit } from '../models/Unit';
import { ApiService } from '../api.service';

@Component({
  selector: 'unit-details',
  templateUrl: './unit-details.component.html'
})

export class UnitDetailsComponent implements OnInit {

  @Input() public unit: Unit;
  public paragraphs: any;

  constructor(private api: ApiService) {
  }

  public ngOnInit() {
    this.paragraphs = this.api.getParagraphs(this.unit.id);
  }

}
