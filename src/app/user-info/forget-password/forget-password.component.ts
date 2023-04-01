import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  constructor(public fb: FormBuilder) { }
  get email() {
    return this.forgetPasswordForm.get('email');
  }
  forgetPasswordForm = new FormGroup({
    email: new FormControl('',[Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });

  ngOnInit(): void {
  }
  public resetPassword() {
    if (this.forgetPasswordForm.valid) {
      console.log(this.forgetPasswordForm.value);
    }
  }
}
