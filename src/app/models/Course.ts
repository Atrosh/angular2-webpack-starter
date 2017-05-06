import { Unit } from './Unit';
import { User } from './User';
/**
 * Created by vladr on 02.05.2017.
 */
export class Course {
  public id: number;
  public name: string;
  public description: string;
  public open: boolean;
  public organisation: any;
  public owners: User[];
  public units: Unit[];
  public lessons: any[];

  constructor() {
    this.units = [];
  }
}
