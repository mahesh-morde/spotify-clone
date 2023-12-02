import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(private Router:Router){}

  onNavigateToReg(){
    this.Router.navigate(['/signup']);
  }

  public UsernameFormControl = new FormControl(null,[Validators.required, Validators.email]);
  public PasswordFormControl = new FormControl(null,[Validators.minLength(4)]);

  public userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username : this.UsernameFormControl,
      password : this.PasswordFormControl,
    })
  }
 
   submit(){
    console.log(this.userForm.value)
   }
  
}

