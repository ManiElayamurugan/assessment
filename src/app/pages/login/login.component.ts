import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: any;
  submitted = false;
  email: any;
  value: any;
  phoneNumber: any;
  company: any;

  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  constructor(private forms: FormBuilder,) {

  }

  ngOnInit(): void {
    this.loginForm = this.forms.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      company: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    })
  }
  get validate() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // this.value=this.loginForm.value.email
    console.log(this.value)
    console.log(this.loginForm.status)


    this.email = this.loginForm.value.email
    this.company = this.loginForm.value.company
    this.phoneNumber = this.loginForm.value.phoneNumber
    localStorage.setItem('email', this.email);
    localStorage.setItem('password', this.company);
    localStorage.setItem('confirmPassword', this.phoneNumber);
  }
}
