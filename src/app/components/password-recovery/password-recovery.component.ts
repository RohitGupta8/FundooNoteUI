import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
  hide = true;
  constructor(private fb: FormBuilder, private userInfo: UserServiceService,
     private router: Router, private snakeBar: MatSnackBar) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      code: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.resetForm.valid) {
      console.log(this.resetForm.value);
      let reqData = {
        email: this.resetForm.value.email,
        password: this.resetForm.value.password,
        code: this.resetForm.value.code
      }
      this.userInfo.ResetPassword(reqData).subscribe((res: any) => {
        console.log(res);
        this.snakeBar.open(`${res.message}`, '', { duration: 2500, verticalPosition: 'bottom', horizontalPosition: 'center' })
        if (`${res.status == true}`)
          this.router.navigate(['/login']);
      },
        error => {
          this.snakeBar.open(`${error.message}`, '', { duration: 2500, verticalPosition: 'bottom', horizontalPosition: 'center' })

        })
    }
  }
}
