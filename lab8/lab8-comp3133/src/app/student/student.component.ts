import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  title = 'Student View';
   date: string;

  constructor() {
    this.date = new Date().toISOString();
  }
}
