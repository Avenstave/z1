import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

// function usernameValidator(control: FormControl): { [s: string]: boolean } {
//   if (!control.value.match(/^[0-9]+$/)) {
//     return { invalidusername: true };
//   }
// }
// function passwordValidator(control: FormControl): { [s: string]: boolean } {
//   if (!control.value.match(/^[0-9]+$/)) {
//     return { invalidpassword: true };
//   }
//}
function pinValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^[0-9]+$/)) {
    return { invalidpin: true };
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  pin: AbstractControl;
  loginfalid: boolean;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.myForm = fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])],
      'pin': ['', Validators.compose([Validators.min(1000), Validators.max(9999), pinValidator])],
    });

    this.username = this.myForm.controls['username'];
    this.password = this.myForm.controls['password'];
    this.pin = this.myForm.controls['pin'];
    this.loginfalid = false;
  }
  onSubmit(value: any): void {
    if (!this.username.valid) {
      alert("请填写用户名");
    }
    else if (!this.password.valid) {
      alert("请填写密码");
    }
    else if (!this.pin.valid) {
      alert("请填写验证码");
      return;
    }
    console.log(value);
    var myrouter = this.router;//闭包
    this.auth.userName = value.username;
    this.auth.login(value, function () {
      this.router.navigate(['/home']);
      // myrouter.navigate(['/home']);
    }.bind(this));




  }

  ngOnInit() {
  }

}
