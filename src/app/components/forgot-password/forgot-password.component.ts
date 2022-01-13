import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  submitted = false;
  hide = true;
  constructor(private fb: FormBuilder, private userInfo: UserServiceService,
     private router: Router, private snakeBar: MatSnackBar) { }

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.forgotForm.valid) {
      console.log(this.forgotForm.value);
      let reqData = {
        email: this.forgotForm.value.email
      }
      this.userInfo.Forgot(reqData).subscribe((res: any) => {
        console.log(res);
        this.snakeBar.open(`${res.message}`, '', { duration: 2500, verticalPosition: 'bottom', horizontalPosition: 'center' })
        if (`${res.status == true}`)
          this.router.navigate(['/reset']);
      },
        error => {
          this.snakeBar.open(`${error.message}`, '', { duration: 2500, verticalPosition: 'bottom', horizontalPosition: 'center' })

        })
    }
  }
}
