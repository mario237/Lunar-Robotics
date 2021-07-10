import { Component, OnInit } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeNavbar(){
    $(".navbar-collapse").collapse('hide');
  }

}
