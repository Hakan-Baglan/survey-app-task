import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  errorMessage!: string;
  showPassword = false;
  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.intForm();
  }



  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  intForm() {
    this.form = this.fb.group({
      username: ["jackdoe@jack.com", Validators.required],
      password: ["*MyT34m*", Validators.required],
    })
  }

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.errorMessage = "";
    this.authService.login(this.form.value).subscribe(res => {
      setTimeout(() => {
        this.router.navigate(['guest-details']);
      }, 3000)
    }, (err: HttpErrorResponse) => {
      console.log("Error:", err);
      if (!err.ok && err.status == 401) {
        this.errorMessage = "Kullanıcı Adı ve şifrenizi kontrol ediniz"
      }
    })
  }





}
