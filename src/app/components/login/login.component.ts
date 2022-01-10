import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
  }
}
