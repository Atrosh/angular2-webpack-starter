import { User } from './User';
import { Course } from './Course';
export class Organisation {
  public id: number;
  public name: string;
  public description: string;
  public created: Date;
  public members: User[];
  public courses: Course[];
}
