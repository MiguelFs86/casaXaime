import { Component, OnInit } from '@angular/core';

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

  	constructor() {
      this.trekking = './assets/img/activities/trekking.png';
  		this.horse_riding = './assets/img/activities/horse_riding.png';
      this.canoeing = './assets/img/activities/canoeing.png';
      this.quading = './assets/img/activities/quading.png';
      this.museum = './assets/img/activities/museum.png';
      this.church = './assets/img/activities/church.png';
  	}

    activities = [
      {'title': 'Senderismo', 'description':'Disfrute de una gran cantidad de rutas y caminos alrededor de una paisaje tan único y especial como As Fragas do Eume.', 'image':'./assets/img/activities/trekking.png'},
      {'title': 'Paseos a caballo', 'description':'Organiza tu ruta o paseo en caballo para contemplar las maravillas del paisaje.', 'image':'./assets/img/activities/horse_riding.png'},
      {'title': 'Desdenso en canoa', 'description':'Descienda por el río Eume, explorando las Fragas desde dentro, montado en una canoa.', 'image':'./assets/img/activities/canoeing.png'},
      {'title': 'Rutas en Quad', 'description':'Disfrute de una ruta en Quad organizada para explorar el entorno natural.', 'image':'./assets/img/activities/quading.png'},
      {'title': 'Turismo histórico', 'description':'En los alrededores de Casa Xaime existen un gran número de museos y turismo histórico, como el Monasterio de Monfero, el Monasterio de Caaveiro o la Torre de Andrade.', 'image':'./assets/img/activities/museum.png'}
    ]

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
