import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private rourter: Router) { }

  ngOnInit() {
  }

  @Input () userName: string = '';

  logout(){
    this.rourter.navigate(['/login']);
  }

}
