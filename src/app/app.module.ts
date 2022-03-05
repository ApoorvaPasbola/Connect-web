import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { LoginComponent } from './authentication/login/login.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { HomePageComponent } from './home/homePage/homePage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';

const ROUTES: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signUp', component: SignUpComponent},
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule,
    HomeModule,
    AuthenticationModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,

  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}],
  bootstrap: [AppComponent],
})
export class AppModule {}
