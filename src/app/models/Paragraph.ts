import { Unit } from './Unit';
import { Step } from './Step';
/**
 * Created by vladr on 02.05.2017.
 */
export class Paragraph {
  public id: number;
  public serial: number;
  public name: string;
  public description: string;
  public created: Date;
  public updated: Date;
  public unit: Unit;
  public steps: Step[];

  constructor() {
  }
}
