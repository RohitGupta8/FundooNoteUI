import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  submitted = false;
  hide = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email: ['', Validators.required],
      service: 'advanced'
    });
  }
  onSubmit() {
    this.submitted = true;
  }
}
