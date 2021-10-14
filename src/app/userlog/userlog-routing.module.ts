import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlogComponent } from './userlog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [{ path: '', component: UserlogComponent,
  children: [
    {path : 'login', component: LoginComponent},
    {path : 'register', component: RegisterComponent},
    {path : 'dashboard', component: DashboardComponent},
    {path : 'verification', component: VerificationComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlogRoutingModule { }
