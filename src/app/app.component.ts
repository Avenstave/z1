import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zyq30';

  isLogin: boolean = true;
  username: string = '';
  constructor(
    private router: Router,
    private auth: AuthService
  ) {


  }

  tiuchu() {
    this.auth.logout();
    alert('您已退出！');
    this.router.navigate(['./login']);
  }
  ngOnInit() {

  }
}
