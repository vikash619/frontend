import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlogRoutingModule } from './userlog-routing.module';
import { UserlogComponent } from './userlog.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerificationComponent } from './verification/verification.component';


@NgModule({
  declarations: [
    UserlogComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    VerificationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserlogRoutingModule
  ],
})
export class UserlogModule { }
