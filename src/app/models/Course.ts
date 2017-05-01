import {Unit} from "./Unit";
/**
 * Created by vladr on 02.05.2017.
 */
export class Course {
  public id: number;
  public name: string;
  public description: string;
  public open: boolean;
  public organisation: any;
  public owners: Array<any>;
  public units: Array<Unit>;
  public lessons: Array<any>;

  constructor() {
    this.units = [];
  }
}
