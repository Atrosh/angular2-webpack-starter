import {Paragraph} from "./Paragraph";
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
  public progresses: Array<any>;

  constructor() {
  }
}
