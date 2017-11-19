import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
	//private _album: Array = [];
   	constructor( ){ }

  	ngOnInit() {
  	}

  	imgArr = [
  		'/assets/img/gallery/img1.jpeg',
  		'/assets/img/gallery/img2.jpeg',
  		'/assets/img/gallery/img3.jpeg',
  		'/assets/img/gallery/img4.jpeg',
  		'/assets/img/gallery/img5.jpeg',
  		'/assets/img/gallery/img6.jpeg',
  		'/assets/img/gallery/img7.jpeg',
  		'/assets/img/gallery/img8.jpeg',
  		'/assets/img/gallery/img9.jpeg',
  		'/assets/img/gallery/img10.jpeg',
  		'/assets/img/gallery/img11.jpeg',
  		'/assets/img/gallery/img12.jpeg',
  		'/assets/img/gallery/img13.jpeg',
  		'/assets/img/gallery/img14.jpeg',
  		'/assets/img/gallery/img15.jpeg',
  		'/assets/img/gallery/img16.jpeg',
  		'/assets/img/gallery/img17.jpeg',
  		'/assets/img/gallery/img18.jpeg',
  		'/assets/img/gallery/img19.jpeg',
  		'/assets/img/gallery/img20.jpeg',
  		'/assets/img/gallery/img21.jpeg',
  		'/assets/img/gallery/img22.jpeg',
  		'/assets/img/gallery/img23.jpeg',
  		'/assets/img/gallery/img24.jpeg',
  		'/assets/img/gallery/img25.jpeg',
  		'/assets/img/gallery/img26.jpeg',
  		'/assets/img/gallery/img27.jpeg',
  		'/assets/img/gallery/img28.jpeg'
  	]

}
