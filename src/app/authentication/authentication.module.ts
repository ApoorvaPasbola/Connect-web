import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    RouterModule
    ],
    providers:[AuthenticationService]
})
export class AuthenticationModule { }
