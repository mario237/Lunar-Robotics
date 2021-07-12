import { NavbarServiceService } from './../../sevices/navbar-service.service';
import { Component, OnInit } from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor(private _NavbarServiceService: NavbarServiceService, private _AnimationsService: AnimationsService) { }

  ngOnInit(): void {
    this._NavbarServiceService.changeHeaderBackground();
    this._AnimationsService.initalizeAnimation();
  }



}
