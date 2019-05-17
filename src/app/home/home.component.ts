import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  menuIndex = 1;
  constructor(
    private router: Router,
    private auth: AuthService) {
  }
  menuClick(index) {
    this.menuIndex = index;
    if (index == 1) {
      this.router.navigate(['home/student']);
    }
    else if (index == 2) {
      this.router.navigate(['home/stu']);
    }
  }
  ngOnInit() {
  }
}