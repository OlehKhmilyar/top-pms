import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userService.currentUserName = form.value.login;
    
    this.router.navigate(['/projects']);
  }

}
