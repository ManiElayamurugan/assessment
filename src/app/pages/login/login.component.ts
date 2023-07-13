import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private forms: FormBuilder, private toastr: ToastrService, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.forms.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      company: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      checkbox: ['', [Validators.required]]
    })
  }
  get validate() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.loginForm.status === 'VALID'){
    this.router.navigate(['/assessment'])
      this.toastr.success("Login successfully")
      console.log('registerForm',this.loginForm.value)
      this.email = this.loginForm.value.email
      this.company = this.loginForm.value.company
      this.phoneNumber = this.loginForm.value.phoneNumber
      localStorage.setItem('email', this.email);
      localStorage.setItem('company', this.company);
      localStorage.setItem('phoneNumber', this.phoneNumber);
      this.submitted = false;
      this.loginForm.reset();
     }
     else if(this.loginForm.status === 'INVALID') {
      this.toastr.error('Please fill the required fields')
     }

  }
}
