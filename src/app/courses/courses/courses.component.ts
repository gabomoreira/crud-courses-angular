import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses$: Observable<Course[]>;
  displayedColumns: string[] = ['name', 'category'];

  constructor(
    private service: CoursesService,
    private dialog: MatDialog
    ) {
    this.courses$ = this.service.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar os cursos.')
        return of([])
      })
    )
  }

  ngOnInit(): void {

  }

  onError(error: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: error
    });
  }

}
