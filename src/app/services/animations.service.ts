import { Injectable } from '@angular/core';
import * as AOS from 'aos';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor() { }

  initalizeAnimation() {
    AOS.init({
      duration: 1500,
      once: true
    });
  }
}
