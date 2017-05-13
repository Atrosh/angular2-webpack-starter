/**
 * Created by vladr on 30.04.2017.
 */
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Unit } from '../models/Unit';
import { ActivatedRoute } from '@angular/router';
import { Paragraph } from '../models/Paragraph';

@Component({
  selector: 'edit-unit',
  templateUrl: './edit-unit.component.html'
})

export class EditUnitComponent implements OnInit {

  public newParagraphName: string;
  public unit: Unit = new Unit(null, null, null);
  public paragraphs: Paragraph[] = [];

  constructor(private auth: AuthService, private api: ApiService, private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.api.getUnit(this.route.snapshot.params['id']).subscribe(
      (data) => this.unit = data,
      (error) => console.log(error)
    );
    this.getParagraphs();
  }

  public saveUnit() {
    this.api.saveParagraphs(this.paragraphs).subscribe();
    this.api.updateUnit(this.unit).subscribe(
      (data) => {
        this.unit = data;
        this.getParagraphs();
      },
      (error) => console.log(error)
    );
  }

  public addParagraph(name) {
    this.paragraphs.push(new Paragraph(this.paragraphs.length + 1, name, this.unit));
  }

  public deleteParagraph(deletedParagraph: Paragraph) {
    if (deletedParagraph.id > 0) {
      this.api.deleteParagraph(deletedParagraph.id).subscribe();
    }
    this.paragraphs = this.paragraphs.filter((p) => p !== deletedParagraph);
    this.reorderParagraphs();
  }

  private reorderParagraphs() {
    let newParagraphs = [];
    let i = 0;
    this.paragraphs.forEach((p) => {
      i++;
      p.serial = i;
      newParagraphs.push(p);
    });
    this.paragraphs = newParagraphs;
  }

  private getParagraphs() {
    this.api.getParagraphs(this.route.snapshot.params['id']).subscribe(
      (data) => this.paragraphs = data,
      (error) => console.log(error)
    );
  }
}
