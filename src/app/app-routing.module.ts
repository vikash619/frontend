import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ResumeComponent } from './component/resume/resume.component';
import { ResumetemplateComponent } from './component/resumetemplate/resumetemplate.component';

const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'login', component: LoginComponent},
  { path : 'dashboard', component: DashboardComponent},
  { path : 'resume', component: ResumeComponent},
  { path : 'resumetemplate', component: ResumetemplateComponent},
  { path : "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, RegisterComponent, LoginComponent, DashboardComponent, ResumeComponent, ResumetemplateComponent];
