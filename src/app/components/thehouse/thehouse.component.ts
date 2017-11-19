import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-thehouse',
  templateUrl: './thehouse.component.html'
})
export class ThehouseComponent implements OnInit {

	mainImage1: string;
	mainImage2: string;
	mainImage3: string;

  	constructor() { 
  		this.mainImage1 = '/assets/img/Frontage1.jpg';
  		this.mainImage2 = '/assets/img/FrontImage2.jpeg';
  		this.mainImage3 = '/assets/img/FrontImage3.jpeg';
  	}

  ngOnInit() {
      var mapOptions = {
            center: new google.maps.LatLng(43.291048, -7.9593019),
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.HYBRID
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }

}
