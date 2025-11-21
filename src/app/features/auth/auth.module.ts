import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '@features/auth/login/login.component';
import { RegisterComponent } from '@features/auth/register/register.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from '@shared/share.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule, SharedModule
],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule {}

