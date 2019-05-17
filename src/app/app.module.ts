import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { LoggedInGuard } from './loggedIn.guard';
import { AuthService } from './auth.service';
export const appChildRoutes: Routes = [
  { path: "student", component: StudentListComponent },
  { path: "stu", component: StudentComponent },

  { path: '', redirectTo: 'student', pathMatch: 'full' }
]
const approutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: appChildRoutes, canActivate: [LoggedInGuard] },
  { path: 'about', component: AboutComponent, canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    StudentListComponent,
    StudentComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
