import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authservice:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onLoggedout(){
    this.authservice.loggedout().subscribe((data:any)=>{
      console.log("cleared successfully cookie");
    })
    this.router.navigate(['/userlog/login']);
  }
}
