import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ResumetemplateComponent } from './resumetemplate/resumetemplate.component';
import { UserresumeComponent } from './userresume.component';

const routes: Routes = [{ path: '', component: UserresumeComponent,
  children : [
    {path : 'resume', component : ResumeComponent},
    {path : 'resumetemplate', component: ResumetemplateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserresumeRoutingModule { }
