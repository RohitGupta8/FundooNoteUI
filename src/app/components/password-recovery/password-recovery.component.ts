import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
  hide = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      otp: ['', Validators.required],
      service: 'advanced'
    });
  }
  onSubmit() {
    this.submitted = true;
  }
}
