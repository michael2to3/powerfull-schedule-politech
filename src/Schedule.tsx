import * as React from 'react';

interface Faculty {
  id: number;
  name: string;
  abbr: string;
}
interface Group {
  id: number;
  name: string;
  level: number;
  type: string;
  kind: number;
  spec: string;
  year: number;
  faculty: Faculty;
}
interface Teacher {
  id: number;
  oid: number;
  fullName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  grade: string;
  chair: string;

}
interface Building {
  id: number;
  name: string;
  abbr: string;
  address: string;
}
interface Auditorie {
  id: number;
  name: string;
  building: Building;

}
interface TypeObj {
  id: number;
  name: string;
  abbr: string;
}

interface Lesson {
  subject: string;
  subjectShort: string;
  type: number;
  additionalInfo: String;
  timeStart: String;
  timeEnd: String;
  parity: number;
  typeObj: TypeObj;
  groups: Group[];
  teachers: Teacher[];
  auditories: Auditorie[];
  webinarUrl: String;
  lmsUrl: String;
}

interface ScheduleProps {
  weekday: number;
  date: string;
  lessons: Lesson[];
}
function Schedule(data: ScheduleProps) {
  return (<div>Schedule</div>);
}

export default Schedule;
