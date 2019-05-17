import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
function idValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match('')) {
    return { invalidid: true };
  }
}
function nameValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match('')) {
    return { invalidname: true };
  }
}
function sexValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^[0-9]+$/)) {
    return { invalidsex: true };
  }
}
function webValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^[0-9]+$/)) {
    return { invalidweb: true };
  }
}
function RFIDValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^[0-9]+$/)) {
    return { invalidRFID: true };
  }
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  myForm: FormGroup;
  id: AbstractControl;
  name: AbstractControl;
  sex: AbstractControl;
  web: AbstractControl;
  RFID: AbstractControl;
  loginfalid: boolean;
  menuIndex = 1;

  constructor(fb: FormBuilder, public router: Router) {
    this.myForm = fb.group({
      'id': ['', Validators.compose([Validators.required, idValidator])],
      'name': ['', Validators.compose([Validators.required, nameValidator])],
      'sex': ['', Validators.compose([Validators.required, sexValidator])],
      'web': ['', Validators.compose([Validators.required, webValidator])],
      'RFID': ['', Validators.compose([Validators.required, RFIDValidator])]
    });
    this.id = this.myForm.controls['id'];
    this.name = this.myForm.controls['name'];
    this.sex = this.myForm.controls['sex'];
    this.web = this.myForm.controls['web'];
    this.RFID = this.myForm.controls['RFID'];
    this.loginfalid = false;
  }

  ngOnInit() {

  }
  menuClick(index) {
    this.menuIndex = index;
  }
  onSubmit(value: string): void {
    console.log('',
      [this.router.navigate(['stu'], { queryParams: { 'id': value } }),
      this.router.navigate(['stu'], { queryParams: { 'name': value } }),
      this.router.navigate(['stu'], { queryParams: { 'sex': value } }),
      this.router.navigate(['stu'], { queryParams: { 'web': value } }),
      this.router.navigate(['stu'], { queryParams: { 'RFID': value } })]
    );

  }
}


