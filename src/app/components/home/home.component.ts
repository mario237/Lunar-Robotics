import { AnimationsService } from '../../services/animations.service';
import { VideoHelperService } from '../../services/video-helper.service';
import { NavbarServiceService } from '../../services/navbar-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading:boolean = true;

  constructor
  (
    private _NavbarServiceService: NavbarServiceService,
    public _VideoHelperService: VideoHelperService,
    private _AnimationsService: AnimationsService
  ) {}


  ngOnInit(): void {
    this._NavbarServiceService.changeHeaderBackground();
    this._AnimationsService.initalizeAnimation();

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }


}
