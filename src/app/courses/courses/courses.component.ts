import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses: Course[] = [
    {_id: 'a', name: 'Angular', category: 'Front end'},
    {_id: 'b', name: 'Spring Boot', category: 'Back end'},
  ];
  displayedColumns: string[] = ['name', 'category'];

  constructor() {
  }

  ngOnInit(): void {

  }
}
