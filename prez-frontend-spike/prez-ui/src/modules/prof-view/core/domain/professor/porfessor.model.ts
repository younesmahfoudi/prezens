import {Lesson} from "../lesson/lesson.model";

export interface Professor {
  email: string;
  first_name: string;
  last_name: string;
  uid: number;
  lessons: Lesson[];
}
