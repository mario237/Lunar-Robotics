import { Component, OnInit } from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';
import { NavbarServiceService } from 'src/app/sevices/navbar-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private _NavbarServiceService:NavbarServiceService , private _AnimationsService: AnimationsService) { }

  ngOnInit(): void {
    this._NavbarServiceService.changeHeaderBackground();
    this._AnimationsService.initalizeAnimation();
  }
}
