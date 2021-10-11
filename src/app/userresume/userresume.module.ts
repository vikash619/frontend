import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserresumeRoutingModule } from './userresume-routing.module';
import { UserresumeComponent } from './userresume.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumeComponent } from './resume/resume.component';
import { ResumetemplateComponent } from './resumetemplate/resumetemplate.component';


@NgModule({
  declarations: [
    UserresumeComponent,
    ResumeComponent,
    ResumetemplateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UserresumeRoutingModule
  ]
})
export class UserresumeModule { }
