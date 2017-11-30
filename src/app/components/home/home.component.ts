import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

	mainImage1: string;
	mainImage2: string;
	mainImage3: string;

  logo: string;

  frontage1: string; 


  constructor() {
    this.frontage1 = './assets/img/Frontage1.jpg';
    this.logo = './assets/img/logo.png';
  }

  imageArray = [
    {'src':'./assets/img/gallery/frontage1-1.jpg','thumb':'./assets/img/gallery/frontage1-1-thumb.jpg'},
    {'src':'./assets/img/gallery/frontage1-2.jpg','thumb':'./assets/img/gallery/frontage1-2-thumb.jpg'},
    {'src':'./assets/img/gallery/frontage1-3.jpg','thumb':'./assets/img/gallery/frontage1-3-thumb.jpg'}
  ];

  	ngOnInit() {
      window.scrollTo(0, 0);
    }

}
