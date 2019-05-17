import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /*是否已经登录*/
  private loggedIn = false;
  userName: string;
  constructor(private httpclient: HttpClient, private router: Router) { }
  login(u: any, callback: any): boolean {

    this.httpclient.post('http://127.0.0.1:8086/login', JSON.stringify(u)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.success) {
          this.loggedIn = true;
          callback();
        }
        else {
          this.loggedIn = false;
          alert("登录失败");
        }
      }
    );
    return;
  }
  logout() {
    this.loggedIn = false;
  }
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
