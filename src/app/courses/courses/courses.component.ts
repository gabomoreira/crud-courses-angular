import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses$: Observable<Course[]>;
  displayedColumns: string[] = ['name', 'category', 'actions'];

  constructor(
    private service: CoursesService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
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

  onAdd(): void {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onError(error: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: error
    });
  }

}
