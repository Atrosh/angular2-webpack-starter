import { Course } from './Course';
import { User } from './User';
/**
 * Created by vladr on 10.05.2017.
 */
export class LessonDto {
  public users: User[];
  public time: Date;
  public since: Date;
  public till: Date;
  public course: Course;

  constructor() {
    this.since = new Date();
    this.till = new Date();
    this.time = new Date();
  }
}
