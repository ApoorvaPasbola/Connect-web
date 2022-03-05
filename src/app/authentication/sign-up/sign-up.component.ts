import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as bcrypt from "bcryptjs";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }
  signUpForm:FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    repassword: new FormControl(),
    email: new FormControl()
  })
  ngOnInit(): void {
  }
  signUp(){
    console.log("form values are ", this.signUpForm.value);

  }
  isAlreadyTaken(value:string){

  }
  isEqual(){
    
  }
  hashCredentials(email:string, password:string){
    const salt = bcrypt.genSaltSync(10);
    const promise1 = bcrypt.hash(email,salt);
    const promise2 = bcrypt.hash(password,salt);
    return Promise.all([promise1,promise2]);
  }
}
