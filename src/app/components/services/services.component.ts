import { NavbarServiceService } from '../../services/navbar-service.service';
import { Component, OnInit } from '@angular/core';
import { VideoHelperService } from 'src/app/services/video-helper.service';
import { AnimationsService } from 'src/app/services/animations.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  isLoading:boolean = true;

  constructor(private _NavbarServiceService:NavbarServiceService , public _VideoHelperService:VideoHelperService, private _AnimationsService: AnimationsService) { }

  ngOnInit(): void {
    this._NavbarServiceService.changeHeaderBackground();
    this._AnimationsService.initalizeAnimation();

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

}
