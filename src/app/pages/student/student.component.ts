import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  students: any[] = [];
  currentStudentIndex = 0;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.db
      .list('students')
      .valueChanges()
      .subscribe((students) => {
        this.students = students;
      });
  }

  nextStudent() {
    if (this.currentStudentIndex < this.students.length - 1) {
      this.currentStudentIndex++;
    }
  }

  previousStudent() {
    if (this.currentStudentIndex > 0) {
      this.currentStudentIndex--;
    }
  }
}
