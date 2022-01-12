import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  submitted = false;
  hide = true;
  constructor(private fb: FormBuilder, private userInfo: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.forgotForm.value.password != this.forgotForm.value.confirm) {
      return alert("password didn't match");
    }
    
    if (this.forgotForm.valid) {
      console.log(this.forgotForm.value);
      let reqData = {
        email: this.forgotForm.value.email
      }
      return this.userInfo.Forgot(reqData).subscribe((res: any) => {
        console.log(res);
        alert("SuccessFully...... send a mail !!! plz take otp from mail ");
        if (`${res.status == true}`)
          this.router.navigate(['/reset']);
      })
    }
  }
}
