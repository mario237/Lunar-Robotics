import { Injectable } from '@angular/core';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {


  constructor() { }


  collapseNav() { $(".navbar-collapse").collapse('hide'); }


  changeHeaderBackground() {
    $(window).on('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('.header').css('background', '#000')
      } else {
        $('.header').css('background', 'transparent')
      }
    })
  }


}
