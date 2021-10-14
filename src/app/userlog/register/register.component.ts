import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  get fullName(){
    return this.registrationForm.get('fullName');
  }

  get userName(){
    return this.registrationForm.get('userName');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get password(){
    return this.registrationForm.get('password');
  }

  get confirmpassword(){
    return this.registrationForm.get('confirmpassword');
  }

 

  constructor(private fb:FormBuilder, private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  //first method : by FormGroup and FormControl
  // registrationForm = new FormGroup({
  //   fullName : new FormControl(''),
  //   userName : new FormControl(''),
  //   email : new FormControl(''),
  //   password : new FormControl(''),
  //   confirmpassword : new FormControl('')

  // });

  //second method : by FormBuildet
  registrationForm = this.fb.group({
    fullName : ['', [Validators.required]],
    userName : ['', [Validators.required]],
    email : ['', [Validators.required]],
    password : ['', [Validators.required, Validators.minLength(4)]],
    confirmpassword : ['', [Validators.required, Validators.minLength(4)]],
    verified: [false]
  })


  loadexampleApiData(){
    this.registrationForm.setValue({        //in setValue({}) : have to supply all value, if want supply few value than use : patchValue({})
      fullName : "vikash",
      userName : "vikash619",
      email : "vikaskmishra619@gmail.com",
      password : "1111",
      confirmpassword : "1111"
    })
  }

  registrationFormSubmit(){
    this.authservice.registerUser(this.registrationForm.value).subscribe((data:any)=>{
      console.log(data.body);
      if(data.body.success){
        console.log('user added successfully');
        this.router.navigate(['/userlog/login'])
      }else{
        console.log('something went wrong');
        this.router.navigate(['/userlog/register']);
      }
    })
  }
}
