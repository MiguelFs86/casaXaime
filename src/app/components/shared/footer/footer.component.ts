import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	facebookLogo: string;
	twitterLogo: string;
	googlePlusLogo: string;

  	constructor() { 
  		this.facebookLogo = './assets/img/logos/facebook.png';
  		this.twitterLogo = './assets/img/logos/twitter.png';
  		this.googlePlusLogo = './assets/img/logos/googlePlus.png';
  	}

  ngOnInit() {
  }

}
