import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean = false;
  login: string;
  pass: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.login = form.value.login;
    this.pass = form.value.pass;
  }

}
