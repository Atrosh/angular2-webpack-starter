import { Unit } from './Unit';
import { User } from './User';
import { Lesson } from './Lesson';
import { Organisation } from './Organisation';
/**
 * Created by vladr on 02.05.2017.
 */
export class Course {
  public id: number;
  public name: string;
  public description: string;
  public open: boolean;
  public organisation: Organisation;
  public owners: User[];
  public units: Unit[];
  public lessons: Lesson[];

  constructor() {
    this.units = [];
  }
}
