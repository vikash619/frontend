import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { FormBuilder,FormArray, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {

  resumeForm = this.fb.group({
    fullName : '',
    designation : '',
    contact : '',
    email : '',
    address : '',
    website : '',
    github : '',
    linkedin : '',
    stackoverflow : '',
    academicQli: this.fb.array([this.acad()]),
    workExp: this.fb.array([this.work()]),
    skills : this.fb.array([this.skil()]),
    languages : this.fb.array([this.lang()]),
    interests : this.fb.array([this.intrst()]),
    objective : '',
  });

  constructor(private authservice: AuthService,
    private fb: FormBuilder,
    private router: Router) { }


  get academicQli(): FormArray {
      return <FormArray>this.resumeForm.get('academicQli');
  }

  get workExp(): FormArray {
    return <FormArray>this.resumeForm.get('workExp');
  }

  get skills(): FormArray{
    return <FormArray>this.resumeForm.get('skills');
  }

  get languages(): FormArray{
    return <FormArray>this.resumeForm.get('languages');
  }

  get interests(): FormArray{
    return <FormArray>this.resumeForm.get('interests');
  }

  token!: any;

  acad(): FormGroup{
    return this.fb.group({
      year : '',
      course : '',
      institution : '',
    })
  }

  work(): FormGroup{
    return this.fb.group({
      year : '',
      company : '',
      position : '',
      about : ''
    })
  }

  skil(): FormGroup{
    return this.fb.group({
      skills : ''
    });
  }

  lang(): FormGroup{
    return this.fb.group({
      languages : ''
    });
  }

  intrst(): FormGroup{
    return this.fb.group({
      interests : ''
    });
  }
  
  ngOnInit(): void {

    this.authservice.getResumeData().subscribe((data:any)=>{

      console.log(data)
      console.log( data.resumeData.academicQli.length );

      for(let i = 0; i < data.resumeData.academicQli.length-1; i++){
        this.addnewacademicQli();
      }
      
      for (let i = 0; i < data.resumeData.workExp.length-1; i++){
        this.addnewworkExp();
      }

      this.resumeForm.patchValue({

        fullName: data.resumeData.fullName,
        designation : data.resumeData.designation,
        contact : data.resumeData.contact,
        email : data.resumeData.email,
        address : data.resumeData.address,
        website : data.resumeData.website,
        github : data.resumeData.github,
        linkedin : data.resumeData.linkedin,
        stackoverflow : data.resumeData.stackoverflow,
        skills : data.resumeData.skills,
        languages : data.resumeData.languages,
        interests : data.resumeData.interests,
        objective: data.resumeData.objective,
        academicQli : data.resumeData.academicQli,
        workExp : data.resumeData.workExp,
      })
    })

  }

  addnewacademicQli(){
    this.academicQli.push(this.acad());
  }

  addnewworkExp(){
    this.workExp.push(this.work());
  }

  addnewskill(){
    this.skills.push(this.skil());
  }

  addnewlang(){
    this.languages.push(this.lang());
  }

  addnewintrst(){
    this.interests.push(this.intrst());
  }
  
  onResumeSubmit(){
    console.log(this.resumeForm.value);
    this.authservice.resumeFormSave(this.resumeForm.value).subscribe((data:any)=>{
      console.log(data.body);
      if(data.body.success){
        console.log("resume saved successfully");
        this.router.navigate(['/userresume/resumetemplate']);
      }else{
        console.log("something went wrong");
      }
    });
  }
}


