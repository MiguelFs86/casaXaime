import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

	mainImage1: string;
	mainImage2: string;
	mainImage3: string;

  frontage1: string

	facebookLogo: string;
	twitterLogo: string;
	googlePlusLogo: string;

  	constructor() { 
  		this.mainImage1 = '/assets/img/FrontImage1.jpeg';
  		this.mainImage2 = '/assets/img/FrontImage2.jpeg';
  		this.mainImage3 = '/assets/img/FrontImage3.jpeg';
      this.frontage1 = '/assets/img/Frontage1.jpg';
  		this.facebookLogo = '/assets/img/logos/facebook.png';
  		this.twitterLogo = '/assets/img/logos/twitter.png';
  		this.googlePlusLogo = '/assets/img/logos/googlePlus.png';

  	}

  	ngOnInit() {
    }

}
