import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as bcrypt from "bcryptjs";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor() {
  }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  salt:string='';
  hashedUsername:string = '';
  hashedPassword:string = '';
  login() {

    // post (username,passowrd) -> check if the username exist or not -> if does then check passoword match -> return 200 status
    // this.getHashedUserdetails(this.loginForm.value)
    console.log(this.loginForm.value);
    this.getHashedUserdetails(this.loginForm.value).then(hashedDetails=>{
      console.log("hashedUsername is ",hashedDetails[0]);
      console.log("hashedPassword is ", hashedDetails[1]);
      // post (username,passowrd) -> check in db if the username and password are correct and return appropriate status
    })


  }
  getHashedUserdetails(formValues:{username:string,password:string}):Promise<[string,string]>{
    const salt = bcrypt.genSaltSync(10);
    const promise1 = bcrypt.hash(formValues.username,salt);
    const promise2 = bcrypt.hash(formValues.password,salt);
    return Promise.all([promise1,promise2]);
  }

}
