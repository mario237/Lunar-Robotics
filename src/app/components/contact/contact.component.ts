import { Component, OnInit } from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';
import { NavbarServiceService } from 'src/app/services/navbar-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isLoading:boolean = true;

  constructor(private _NavbarServiceService:NavbarServiceService , private _AnimationsService: AnimationsService) { }

  ngOnInit(): void {
    this._NavbarServiceService.changeHeaderBackground();
    this._AnimationsService.initalizeAnimation();

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
}
