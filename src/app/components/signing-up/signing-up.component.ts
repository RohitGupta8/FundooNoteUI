import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signing-up',
  templateUrl: './signing-up.component.html',
  styleUrls: ['./signing-up.component.scss']
})
export class SigningUpComponent implements OnInit {
  submitted = false;
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
  }

}
