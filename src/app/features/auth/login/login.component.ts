import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@features/auth/services/auth.service';
import { Router } from '@angular/router';
import { LoginData } from '@features/auth/services/login-data';
import { ToasterService } from '@core/services/toaster.service';
import { LocalStorageService } from '@core/services/localStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form: FormGroup;
  failedToLogin:boolean =false;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toaster:ToasterService, private localStorage:LocalStorageService){
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
  submit() {
    if (this.form.valid) {
      const user: LoginData = this.form.value;
      console.log(user);
      this.auth.login(user).subscribe({
      next: (res: any) => {
          this.failedToLogin = false;
          this.localStorage.setAuthToken(res.token);
          console.log("Login successful, token:", res.token);
          this.loginSuccess();
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error("Login failed:", err);
          this.failedToLogin = true;
          this.form.reset();
          this.loginFailed();
        },
      });
    }
    this.failedToLogin = true;
    this.emptyForm();
  }
  loginSuccess() {
    this.toaster.show('Login successful!', 'success');
  }

  loginFailed() {
    this.toaster.show('Invalid credentials', 'error');
  }
  emptyForm(){
    this.toaster.show('Empty Form', 'warning');
  }
}
