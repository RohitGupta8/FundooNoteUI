import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  hide = true;
  constructor(private fb: FormBuilder, private userInfo: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.value.name != this.loginForm.value.lastName) {
      return alert("password didn't match");
    }
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      return this.userInfo.Login(reqData).subscribe((res: any) => {
        console.log(res);
        alert("SuccessFully...... logged in .....enjoy ur fundoo note ");
        // if (`${res.status == true}`)
        //   this.router.navigate(['/login']);
      })
    }
  }
}
