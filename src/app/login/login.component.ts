import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goRegistration(){
    this.router.navigate(['/registration']);
  }

  onSubmit(form: NgForm) {
    console.log(form.value.login);
    console.log(form.value.pass);
  }

}
