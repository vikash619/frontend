import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { CacheStorage } from 'html2canvas/dist/types/core/cache-storage';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken : any;
  user : any;
  allCookieData : any;

  constructor(private http:HttpClient, private cookies:CookieService) { }

  registerUser(registrationForm){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>('users/register', registrationForm, {headers:headers, observe:'response', withCredentials:true});
  }

  authenticateUser(loginForm){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', loginForm, {headers:headers,  observe:'response', withCredentials:true})
  }

  getProfile(){
    let header = new HttpHeaders();
    this.loadToken();
    header = header.append('Authorization', this.authToken);                      
    header = header.append('Content-Type', 'application/json');
    return this.http.get('users/profile',{headers:header})
  }

  updateUser(id,profileUpdateFormValue){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(`users/profile/update/${id}`, profileUpdateFormValue,{headers:headers, observe:'response', withCredentials:true});
  }

  generateOTP(numberVerificationFormValue){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(`users/generateotp`, numberVerificationFormValue,{headers:headers, observe:'response', withCredentials:true});
  }

  verifyOTP(otpVerificationFormValue){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(`users/verifyotp`, otpVerificationFormValue,{headers:headers, observe:'response', withCredentials:true});
  }


  resumeFormSave(resumeFormValue){
    let header = new HttpHeaders();
    header.append("Content-Type", "application/json");
    return this.http.post<any>("users/resume", resumeFormValue, {headers:header, observe:'response', withCredentials:true});
  }

  getResumeData(){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.get("users/resume", {headers:header});
  }

  // resumeFormUpdate(resumeFormValue){
  //   let header = new HttpHeaders();
  //   header.append("Content-Type", "application/json");
  //   return this.http.post<any>("users/resume/update", resumeFormValue, {headers:header, observe:'response', withCredentials:true});
  // }

  storeUserData(token, user){
    localStorage.setItem("id_token", token);
    localStorage.setItem("user ", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem("id_token");
    this.authToken = token;
  }

  loggedin(){
    if(localStorage.getItem("id_token") !== null){      //original method : working fine
      return true;
    }else{
      false;
    }
    // if(this.authToken !== null){                     //mine method : showing dashboard link in navigation menu which is wrong
    //   return true;
    // }else{
    //   return false;
    // }
  }

  loggedout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/logout', {headers:headers,  observe:'response', withCredentials:true})
  }
}
