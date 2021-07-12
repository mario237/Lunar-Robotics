import { Injectable } from '@angular/core';
declare let $:any;


@Injectable({
  providedIn: 'root'
})
export class VideoHelperService {

  constructor() { }


  playPerviewVideo(event: any , videoLink:string) {
    event.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append(`<iframe width="75%" height="75%" src="${videoLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  }

  close_video(event: any) {
    event.preventDefault();
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
  };
}
