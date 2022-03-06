import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private authenticationService:AuthenticationService, private router:Router) {
  }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  login() {
    // post (username,passowrd) -> check if the username exist or not -> if does then check passoword match -> return 200 status
    console.log(this.loginForm.value);
    this.authenticationService
    .hashUserCredentials(this.loginForm.value.username,this.loginForm.value.password)
    .then(([hashedUsername,hashedPassword])=>{
      if(this.authenticationService.isUserCredentialsValid(hashedUsername,hashedPassword)){
        this.router.navigate(['home']);
      }
      else
      alert("Login failed ");
    })
  }

}
