import { Paragraph } from './Paragraph';
import { Progress } from './Progress';
/**
 * Created by vladr on 02.05.2017.
 */
export class Step {
  public id: number;
  public serial: number;
  public name: string;
  public description: string;
  public created: Date;
  public updated: Date;
  public paragraph: Paragraph;
  public progresses: Progress[];

  constructor(serial, name, description, paragraph) {
    this.serial = serial;
    this.name = name;
    this.description = description;
    this.paragraph = paragraph;
  }
}
