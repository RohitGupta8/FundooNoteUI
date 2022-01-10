import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  submitted = false;
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
  }
}
