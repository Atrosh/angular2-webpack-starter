import { Course } from './Course';
import { Paragraph } from './Paragraph';
/**
 * Created by vladr on 02.05.2017.
 */
export class Unit {
  public id: number;
  public serial: number;
  public name: string;
  public description: string;
  public created: Date;
  public updated: Date;
  public course: Course;
  public paragraphs: Paragraph[];

  constructor(serial) {
    this.serial = serial;
  }
}
