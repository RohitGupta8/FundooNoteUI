import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
  hide = true;
  constructor(private fb: FormBuilder,private userInfo: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      code: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.resetForm.value.name != this.resetForm.value.lastName) {
      return alert("password didn't match");
    }
    if (this.resetForm.valid) {
      console.log(this.resetForm.value);
      let reqData = {
        email: this.resetForm.value.email,
        password: this.resetForm.value.password,
        code: this.resetForm.value.code
      }
      return this.userInfo.ResetPassword(reqData).subscribe((res: any) => {
        console.log(res);
        alert("SuccessFully...... password changed !!! plz verify your id to login");
        if (`${res.status == true}`)
          this.router.navigate(['/login']);
      })
    }
  }
}
