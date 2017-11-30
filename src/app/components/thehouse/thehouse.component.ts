import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thehouse',
  templateUrl: './thehouse.component.html'
})
export class ThehouseComponent implements OnInit {

	mainImage1: string;
	mainImage2: string;
	mainImage3: string;

  	constructor() { 
  		this.mainImage1 = './assets/img/Frontage1.jpg';
  	}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
