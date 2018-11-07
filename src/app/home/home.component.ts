import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.stylesheet.scss']
})
export class HomeComponent {
  constructor(
    private router: Router
    ) {}

  getStarted() {
    this.router.navigate(['app-questions']);
  }
}
