import {Person} from "./person.model";
import {Place} from "./place.model";

export class Module {
  public id: number;
  public title: string;
  public field: string;
  public dateStart: string;
  public dateEnd: string;
  public status: string;
  public summary: string;
  public teacher: Person;
  public students: Person[];
  public comment: string;
  public place: Place;
}
