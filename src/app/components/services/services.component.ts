import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	window.scrollTo(0, 0);
  }

  serviceList = [
	{'id':1, 'show':true, 'icon': '/assets/img/service-icons/parking.png', 'title': 'Aparcamiento','description':'Disponemos de un amplio aparcamiento con capacidad para 50 coches.'},
	{'id':2, 'show':true, 'icon': '/assets/img/service-icons/dinning-room.png', 'title': '3 comedores', 'description':'3 comedores para comer'},
	{'id':3, 'show':true, 'icon': '/assets/img/service-icons/hot-water.png', 'title': 'Agua caliente','description':'Disponemos de 2 calentadores de 400L de agua caliente, con capacidad para 50 duchas.'},
	{'id':4, 'show':true, 'icon': '/assets/img/service-icons/kitchen.png', 'title': '2 cocinas totalmente equipadas', 'description':'2 cocinas totalmente equipadas para cada uno de los apartamentos.'},
	{'id':5, 'show':true, 'icon': '/assets/img/service-icons/heating.png', 'title': 'Calefacción central', 'description':'Calefacción central con caldera de Gasoil.'},
	{'id':6, 'show':true, 'icon': '/assets/img/service-icons/injuried.png', 'title': 'Aseos aptos para minusválidos','description':'Aseo totalmente equipado y apto para personas discapacitadas o usuarios de silla de ruedas.'},
	{'id':7, 'show':true, 'icon': '/assets/img/service-icons/tv-room.png', 'title': 'Sala de ocio y televisión', 'description':'Amplia sala de ocio y televisión con cafetería.'},
	{'id':8, 'show':true, 'icon': '/assets/img/service-icons/meeting-room.png', 'title': 'Salón de reuniones','description':'Salón de reuniones con capacidad para 50 personas.'},
	{'id':9, 'show':true, 'icon': '/assets/img/service-icons/wifi.png', 'title': 'Internet WiFi', 'description':'Internet de alta velocidad accesible desde todos los puntos de la casa.'}
  ]

}
