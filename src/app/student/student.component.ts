import { Component, OnInit, Input } from '@angular/core';
import { ALL_STUDENTS, Student } from '../student';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public id: number;
  public name: string;
  public sex: number;
  public web: number;
  public RFID: number;

  private isMale: number;
  private isShow: number;
  private students: Student[];
  constructor(public router: ActivatedRoute) {
    // this.id = {};
    // this.name = {};
    this.students = ALL_STUDENTS;
    this.isMale = 2;
    this.isShow = 1;
  }
  shouldShow(s: Student): boolean {
    return this.isMale == 2 || s.sex == this.isMale;
  }
  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
      this.sex = params['sex'];
      this.web = params['web'];
      this.RFID = params['RFID'];
    });
  }

  btnname() {
    if (this.isMale == 1) {
      return "显示男生"
    }
    else if (this.isMale == 0) {
      return "显示女生"
    } else {
      return "显示全部"
    }
  }
  toggleShow() {
    if (this.isMale == 2) {
      this.isMale = 1;
    }
    else if (this.isMale == 1) {
      this.isMale = 0;
    } else {
      this.isMale = 2;
    }
    return false;
  }

  change() {
    if (this.isShow == 1) {
      this.isShow = 0;
    }
    else {
      this.isShow = 1;
    }
    return false;
  }

  // onSubmit(value: Object): void {
  //   // console.log(this.route.params.subscribe(params => {
  //   //   this.id = params // {id: "xxx"}
  //   // }),
  //   //   this.route.params.subscribe(params => {
  //   //     this.name = params // {name: "xxx"}
  //   //   })
  //     // , value);

  // }
}
