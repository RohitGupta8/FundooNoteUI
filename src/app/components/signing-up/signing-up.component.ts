import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private fb: FormBuilder, private userInfo: UserServiceService,
     private router: Router, private snakeBar: MatSnackBar) { }
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.value.password != this.registrationForm.value.confirm) {
      this.snakeBar.open(`Password not matched with Confirm Password`, '', { duration: 2500, verticalPosition: 'bottom', horizontalPosition: 'center' })
    }else if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      let reqData = {
        firstName: this.registrationForm.value.firstName,
        lastName: this.registrationForm.value.lastName,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password
      }
      this.userInfo.Register(reqData).subscribe((res:any) => {
        console.log(res);
        this.snakeBar.open(`${res.message}`, '', { duration: 2500, verticalPosition: 'bottom', horizontalPosition: 'center' })
        if (`${res.status == true}`)
          this.router.navigate(['/login']);          
      },
        error => {
          this.snakeBar.open(`${error.message}`, '', { duration: 2500, verticalPosition: 'bottom', horizontalPosition: 'center' })

        })
    }else {
      (      error: { message: any; }) => {
        this.snakeBar.open(`${error.message}`, '', { duration: 2500, verticalPosition: 'bottom', horizontalPosition: 'center' })

      }
    }

  }
  ShowPassword() {
    this.hide = !this.hide;
  }
}
