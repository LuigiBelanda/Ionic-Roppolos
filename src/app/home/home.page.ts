import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideConfig = {
    initialSlide: 0,
    speed: 400,
  }

  constructor() {}

}
