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
      {'title': 'Senderismo', 'description':'Disfrute de una gran cantidad de rutas y caminos alrededor de una paisaje tan único y especial como As Fragas do Eume.', 'image':'./assets/img/activities/trekking.png'},
      {'title': 'Paseos a caballo', 'description':'Organiza tu ruta o paseo en caballo para contemplar las maravillas del paisaje.', 'image':'./assets/img/activities/horse_riding.png'},
      {'title': 'Desdenso en canoa', 'description':'Descienda por el río Eume, explorando las Fragas desde dentro, montado en una canoa. <a target=_blank a href=www.cdfragasdoeume.com>www.cdfragasdoeume.com</a>', 'image':'./assets/img/activities/canoeing.png'},
      {'title': 'Rutas en Quad', 'description':'Disfrute de una ruta en Quad organizada para explorar el entorno natural.', 'image':'./assets/img/activities/quading.png'},
      {'title': 'Turismo histórico', 'description':'En los alrededores de Casa Xaime existen un gran número de museos y turismo histórico, como el Monasterio de Monfero, el Monasterio de Caaveiro o la Torre de Andrade.', 'image':'./assets/img/activities/museum.png'},
      {'title': 'Playas', 'description':'A menos de 30 Km. de la casa, puedes visitar las playas de Miño, Perbes, Pontedeume o Cabañas. Y a un poco más, las playas de Coruña o Ferrol.', 'image':'./assets/img/activities/beach.png'}  
    ]

    imageArray = [
      {'title':'Fragas do Eume', 'thumb':'./assets/img/activities/fragas_aerial_thumb.jpg','src':'./assets/img/activities/fragas_aerial.jpg'},
      {'title':'Monasterio de Caaveiro', 'thumb':'./assets/img/activities/caaveiro_thumb.jpg','src':'./assets/img/activities/caaveiro.jpg'},
      {'title':'Monasterio de Monfero', 'thumb':'./assets/img/activities/monfero_thumb.jpg','src':'./assets/img/activities/monfero.jpg'}
    ]

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
