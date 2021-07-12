import { Injectable } from '@angular/core';
declare let $:any;

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {


  constructor() {}


  collapseNav(){$(".navbar-collapse").collapse('hide');}
}
