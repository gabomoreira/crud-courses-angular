import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Course[] {
    return [
      {_id: 'a', name: 'Angular', category: 'Front end'},
      {_id: 'b', name: 'Spring Boot', category: 'Back end'},
    ];
  }
}
