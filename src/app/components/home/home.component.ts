import { Component, OnInit } from '@angular/core';
declare let $: any;
import * as AOS from 'aos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
    this.changeHeaderBackground();
    AOS.init({
      duration: 1500,
      once: true
    });
  }

  playPerviewVideo(event: any) {
    event.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="75%" height="75%" src="https://www.youtube.com/embed/gUVb9g7R9Xk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  }

  close_video(event: any) {
    event.preventDefault();
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
  };

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
