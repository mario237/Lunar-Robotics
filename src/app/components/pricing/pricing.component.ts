import { Component, OnInit } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeHeaderBackground();
  }

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
