import { Course } from './Course';
import { User } from './User';
/**
 * Created by vladr on 10.05.2017.
 */
export class LessonDto {
  public users: User[];
  public since: string;
  public till: string;
  public course: Course;
  public dayOfWeek: number;

  constructor() {
    this.dayOfWeek = 2;
    this.since = new Date().toDateString();
    this.till = new Date().toDateString();
  }
}
