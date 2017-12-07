import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})

export class AboutComponent implements OnInit {

  showMap: boolean = false;
  founded_address: boolean;

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

  getCustomRoute( origin: any ){
    this.founded_address = false;
    var coordinates = new google.maps.LatLng(43.291079, -7.958659);
    this.codeAddress(origin);
  }

  codeAddress( origin:any ) {
    var address = origin;
    var geocoder = new google.maps.Geocoder();
    var lat;
    var len;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        this.founded_address = true;
        console.log("Founded: ",this.founded_address);
        lat = results[0].geometry.location.lat();
        len = results[0].geometry.location.lng();
        var start = new google.maps.LatLng(lat, len);
        var end = new google.maps.LatLng(43.291079, -7.958659);
        var custom_map = new google.maps.Map(document.getElementById("custom_map"),{
          zoom: 14,
          center: end,
          mapTypeId: google.maps.MapTypeId.HYBRID
        });
        var directionsDisplay = new google.maps.DirectionsRenderer();// also, constructor can get "DirectionsRendererOptions" object
        directionsDisplay.setMap(custom_map); // map should be already initialized.
        directionsDisplay.setPanel(document.getElementById("indications"));

        var request = {
            origin : start,
            destination : end,
            travelMode : google.maps.TravelMode.DRIVING
        };
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
      } else {
        this.founded_address = false;
        console.log("Founded: ",this.founded_address);
        return;
        //alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
}