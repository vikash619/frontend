import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  get userName(){
    return this.loginForm.get('userName');
  }

  get password(){
    return this.loginForm.get('password');
  }

  constructor(private authservice:AuthService,
    private fb:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    userName : ['', Validators.required],
    password : ['', [Validators.required, Validators.minLength(4)]]
  })

  onLoginSubmit(){
    this.authservice.authenticateUser(this.loginForm.value).subscribe((data:any)=>{
      console.log(data);
      if(data.body.success){
        this.authservice.storeUserData(data.body.token,data.body.user);
        console.log("user logged in");
        this.router.navigate(['dashboard']);
      }else{
        console.log("wrong credentional");
        this.router.navigate(['login']);
      }
    })
  }

}
