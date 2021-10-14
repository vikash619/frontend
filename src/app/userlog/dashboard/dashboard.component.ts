import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private authservice: AuthService,
    private fb: FormBuilder,
    private router: Router) { }

  userValue!: any;

  profileUpdateForm = this.fb.group({
    fullName: ['', Validators.required],
    userName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4)]],
    confirmpassword: ['', Validators.required]
  })

  ngOnInit(): void {
    this.authservice.getProfile().subscribe((data: any) => {
      this.userValue = data.user;
      this.profileUpdateForm.get("fullName").setValue(this.userValue.fullName);
      this.profileUpdateForm.get("userName").setValue(this.userValue.userName);
      this.profileUpdateForm.get("email").setValue(this.userValue.email);
      this.profileUpdateForm.get("password").setValue(this.userValue.password);
      this.profileUpdateForm.get("confirmpassword").setValue(this.userValue.confirmpassword);
    }, (err) => {
      console.log(err)
    })
  }

  onprofileupdateform(){
    this.authservice.updateUser( this.userValue._id , this.profileUpdateForm.value).subscribe((data:any)=>{
      if(data.body.success){
        console.log("profile updated successfully");
      }else{
        console.log("profile not updated");
      };
    })
  }
}
