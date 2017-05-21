import { User } from './User';
import { Step } from './Step';
/**
 * Created by vladr on 08.05.2017.
 */
export class Progress {
  public id: number;
  public created: Date;
  public passed: boolean;
  public user: User;
  public step: Step;

  constructor(step) {
    this.passed = true;
    this.step = step;
  }
}
