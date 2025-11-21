import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@features/auth/services/auth.service';
import { RegisterData } from '@features/auth/services/register-data';
import { Router } from '@angular/router';
import { ToasterService } from '@core/services/toaster.service';
import { LocalStorageService } from '@core/services/localStorage.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  form: FormGroup;
  failedToRegister: boolean = false;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toaster:ToasterService, private localStorage:LocalStorageService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  submit() {
    if (this.form.valid) {
      const user: RegisterData = this.form.value;
      this.auth.regester(user).subscribe({
        next: (res: any) => {
          console.log(res);
          this.failedToRegister = false;
          this.localStorage.setAuthToken(res.token ?? 'too');
          this.localStorage.setUserId(res.id);
          this.registerSuccess();
          this.router.navigate(['/']);
        },
        error: () => {
          this.failedToRegister = true;
          this.registerFailed();
          this.form.reset();
        },
      });
    }
    this.failedToRegister=true;
    this.emptyForm();
  }
  registerSuccess() {
    this.toaster.show('Register successful!', 'success');
  }
  registerFailed() {
    this.toaster.show('Invalid credentials', 'error');
  }
  emptyForm(){
    this.toaster.show('Empty Form', 'warning');
  }
}
