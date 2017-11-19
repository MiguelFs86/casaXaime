import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  serviceList = [
	{'icon': '/assets/img/service-icons/parking.png','title': 'Aparcamiento'},
	{'icon': '/assets/img/service-icons/dinning-room.png','title': '3 comedores'},
	{'icon': '/assets/img/service-icons/hot-water.png','title': 'Agua caliente'},
	{'icon': '/assets/img/service-icons/kitchen.png','title': '2 cocinas totalmente equipadas'},
	{'icon': '/assets/img/service-icons/heating.png','title': 'Calefacción central'},
	{'icon': '/assets/img/service-icons/injuried.png','title': 'Aseos aptos para minusválidos'},
	{'icon': '/assets/img/service-icons/tv-room.png','title': 'Sala de ocio y televisión'},
	{'icon': '/assets/img/service-icons/meeting-room.png','title': 'Salón de reuniones'},
	{'icon': '/assets/img/service-icons/wifi.png','title': 'Internet WiFi'}
  ]

}
