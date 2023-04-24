import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses: Course[] = [];
  displayedColumns: string[] = ['name', 'category'];

  constructor(
    private service: CoursesService
  ) {
    this.courses = service.list()
  }

  ngOnInit(): void {

  }


}
