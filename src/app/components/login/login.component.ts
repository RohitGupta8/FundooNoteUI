import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  hide = true;
  constructor(private fb: FormBuilder, private userInfo: UserServiceService,
    private router: Router, private snakeBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.userInfo.Login(reqData).subscribe((res: any) => {
        console.log(res);
        this.snakeBar.open(`${res.message}`, '', { duration: 2500, verticalPosition: 'bottom', horizontalPosition: 'center' })
        if (`${res.status == true}`)
          this.router.navigate(['/home']);
      },
        error => {
          this.snakeBar.open(`${error.message}`, '', { duration: 2500, verticalPosition: 'bottom', horizontalPosition: 'center' })

        })
    }
  }
}
