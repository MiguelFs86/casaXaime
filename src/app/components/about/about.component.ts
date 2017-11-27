import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    window.scrollTo(0, 0);
  	var coordinates = new google.maps.LatLng(43.291079, -7.958659);
   	var mapOptions = {
        center: coordinates,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }

    var marker = new google.maps.Marker({
    	position: coordinates,
    	title: "Casa Xaime"
    });    
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    marker.setMap(map);
  }

}