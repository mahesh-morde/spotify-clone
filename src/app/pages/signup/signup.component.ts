import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  constructor(private Router:Router){}

  ngOnInit(): void {
  }

  onNavigateToLogin(){
    this.Router.navigate(['/','login']);
  }

}

