/**
 * Created by vladr on 02.05.2017.
 */
export class User {
  public id: number;
  public username: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public info: string;
  public created: Date;
  public organisation: any;
  public roles: any;
  public courses: any;
  public progresses: any;

  constructor() {
  }
}
