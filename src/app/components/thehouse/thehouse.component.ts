import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-thehouse',
  templateUrl: './thehouse.component.html'
})
export class ThehouseComponent implements OnInit {

	trekking: string;
  horse_riding: string;
  canoeing: string;
  quading: string;
  museum: string;
  church: string;
  beach: string;

  	constructor() {
      this.trekking = './assets/img/activities/trekking.png';
  		this.horse_riding = './assets/img/activities/horse_riding.png';
      this.canoeing = './assets/img/activities/canoeing.png';
      this.quading = './assets/img/activities/quading.png';
      this.museum = './assets/img/activities/museum.png';
      this.church = './assets/img/activities/church.png';
      this.beach = './assets/img/activities/beach.png';
  	}

    activities = [
      {'title': 'THEHOUSE.TREKKING_TITLE', 'description':'THEHOUSE.TREKKING_DESCRIPTION', 'image':'./assets/img/activities/trekking.png'},
      {'title': 'THEHOUSE.HORSERIDING_TITLE', 'description':'THEHOUSE.HORSERIDING_DESCRIPTION', 'image':'./assets/img/activities/horse_riding.png'},
      {'title': 'THEHOUSE.CANOEING_TITLE', 'description':'THEHOUSE.CANOEING_DESCRIPTION', 'image':'./assets/img/activities/canoeing.png'},
      {'title': 'THEHOUSE.QUADING_TITLE', 'description':'THEHOUSE.QUADING_DESCRIPTION', 'image':'./assets/img/activities/quading.png'},
      {'title': 'THEHOUSE.MUSEUM_TITLE', 'description':'THEHOUSE.MUSEUM_DESCRIPTION', 'image':'./assets/img/activities/museum.png'},
      {'title': 'THEHOUSE.BEACH_TITLE', 'description':'THEHOUSE.BEACH_DESCRIPTION', 'image':'./assets/img/activities/beach.png'}  
    ];

    imageArray = [
      {'title':'Fragas do Eume', 'thumb':'./assets/img/activities/fragas_aerial_thumb.jpg','src':'./assets/img/activities/fragas_aerial.jpg'},
      {'title':'Monasterio de Caaveiro', 'thumb':'./assets/img/activities/caaveiro_thumb.jpg','src':'./assets/img/activities/caaveiro.jpg'},
      {'title':'Monasterio de Monfero', 'thumb':'./assets/img/activities/monfero_thumb.jpg','src':'./assets/img/activities/monfero.jpg'}
    ];

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
