import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signing-up',
  templateUrl: './signing-up.component.html',
  styleUrls: ['./signing-up.component.scss']
})
export class SigningUpComponent implements OnInit {
  registrationForm!: FormGroup;
  submitted = false;
  hide = true;
  user: any;

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
      service: 'advanced'
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.value.password != this.registrationForm.value.confirm) {
      return alert("password didn't match");
    }
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      let reqData = {
        firstName: this.registrationForm.value.firstName,
        lastName: this.registrationForm.value.lastName,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password,
        service: this.registrationForm.value.service,
      }
      // return console.log(reqData);
    }

  }
  ShowPassword() {
    this.hide = !this.hide;
  }
}
