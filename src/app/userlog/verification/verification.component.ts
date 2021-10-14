import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor(private authservice: AuthService, private router: Router, private fb: FormBuilder) { }

  userData!: any

  ngOnInit(): void {
    console.log('verification start')
    this.authservice.getProfile().subscribe((data: any) => {
      this.userData = data.user;
    })
  }

  numberVerificationForm = this.fb.group({
    phone_number: ['', [Validators.required]]
  })

  otpVerificationForm = this.fb.group({
    otp_number: ['', [Validators.required]]
  })

  generateotp() {
    this.authservice.generateOTP(this.numberVerificationForm.value).subscribe((data: any) => {
      console.log(data);
      if (data.body.success) {
        console.log("OTP saved successfully");
      } else {
        console.log("OTP not stored");
      };
    })
  }

  verifyotp() {
    this.authservice.verifyOTP(this.otpVerificationForm.value).subscribe((data: any) => {
      console.log("gand",data);
      if (data.body.success) {
        console.log("OTP verified successfully");
        this.router.navigate(['userlog/dashboard']);

      } else {
        console.log("OTP didnt verified");
      };
    }, (err)=>{console.log(err);
    })

  }
}
