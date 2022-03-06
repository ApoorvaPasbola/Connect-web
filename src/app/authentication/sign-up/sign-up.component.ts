import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserCredentials } from 'src/app/shared/models/UserModels';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authenticationsService:AuthenticationService,private router:Router) { }
  // isUnique validator , password matching validator
  public signUpForm:FormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    repassword: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email])
  })
  ngOnInit(): void {
  }
  signUp(){
    this.authenticationsService
    .hashUserCredentials(this.signUpForm.value.email,this.signUpForm.value.password)
    .then(([hashedEmail,hashedPassword]) => {
      const userCredentials:UserCredentials = {email:hashedEmail,password:hashedPassword,username:this.signUpForm.value.username};
      const {firstName,lastName} = this.signUpForm.value;
      const user:User = {firstName,lastName,userCredentials};
      console.log("user details are ", user);
        this.authenticationsService.addUser(user);
        this.router.navigate(['home']);
    })
    .catch(err =>{
      console.log("error while hasing ", err);
    })
  }
  isUsernameTaken(): ValidatorFn {
    return (control:AbstractControl):ValidationErrors | null => {
      const user = this.authenticationsService.USERS.find(({userCredentials})=> userCredentials.username === control.value);
      if(user)
        return {message:'User already taken'}
      return null;
    }
  }
  isEmailTaken(): ValidatorFn {
    return (control:AbstractControl):ValidationErrors | null =>{
      const user = this.authenticationsService.USERS.find(({userCredentials})=> userCredentials.email === control.value);
      if(user)
        return {message:'email already taken'};
      return null;
    }
  }
  arePasswordsSame():ValidatorFn {
    return (control:AbstractControl): ValidationErrors | null => {
    if(control.get('password') === control.get('repassword')){
      console.log('not same');
      return {message:'password does not match'};
      }
    return null;
   }
  }
}
