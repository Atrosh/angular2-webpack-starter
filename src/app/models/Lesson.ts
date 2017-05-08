import { Course } from './Course';
/**
 * Created by vladr on 08.05.2017.
 */
export class Lesson {
  public id: number;
  public date: Date;
  public info: string;
  public task: string;
  public created: Date;
  public course: Course;

  constructor() {
  }
}
