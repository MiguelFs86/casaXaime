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

    firstImgArr = [
      {'src': '/assets/img/gallery/frontage1-2.jpg', 'thumb': '/assets/img/gallery/frontage1-2-thumb.jpg'},
      {'src': '/assets/img/gallery/frontage1-1.jpg', 'thumb': '/assets/img/gallery/frontage1-1-thumb.jpg'},
      {'src': '/assets/img/gallery/frontage1-3.jpg', 'thumb': '/assets/img/gallery/frontage1-3-thumb.jpg'}
    ]

  	imgArr = [
  		{'src': '/assets/img/gallery/kitchen1-1.jpg', 'thumb': '/assets/img/gallery/kitchen1-1-thumb.jpg'},
  		{'src': '/assets/img/gallery/kitchen1-2.jpg', 'thumb': '/assets/img/gallery/kitchen1-2-thumb.jpg'},
  		{'src': '/assets/img/gallery/kitchen1-3.jpg', 'thumb': '/assets/img/gallery/kitchen1-3-thumb.jpg'},
  		{'src': '/assets/img/gallery/kitchen1-4.jpg', 'thumb': '/assets/img/gallery/kitchen1-4-thumb.jpg'},
  		{'src': '/assets/img/gallery/kitchen1-5.jpg', 'thumb': '/assets/img/gallery/kitchen1-5-thumb.jpg'},
  		{'src': '/assets/img/gallery/kitchen1-6.jpg', 'thumb': '/assets/img/gallery/kitchen1-6-thumb.jpg'},
  		{'src': '/assets/img/gallery/kitchen1-7.jpg', 'thumb': '/assets/img/gallery/kitchen1-7-thumb.jpg'},
  		{'src': '/assets/img/gallery/kitchen2-1.jpg', 'thumb': '/assets/img/gallery/kitchen2-1-thumb.jpg'},
  		{'src': '/assets/img/gallery/kitchen2-2.jpg', 'thumb': '/assets/img/gallery/kitchen2-2-thumb.jpg'},
  		{'src': '/assets/img/gallery/kitchen2-3.jpg', 'thumb': '/assets/img/gallery/kitchen2-3-thumb.jpg'},
  		{'src': '/assets/img/gallery/kitchen2-4.jpg', 'thumb': '/assets/img/gallery/kitchen2-4-thumb.jpg'},
  		{'src': '/assets/img/gallery/hall1-1.jpg', 'thumb': '/assets/img/gallery/hall1-1-thumb.jpg'},
  		{'src': '/assets/img/gallery/hall1-2.jpg', 'thumb': '/assets/img/gallery/hall1-2-thumb.jpg'},
  		{'src': '/assets/img/gallery/hall1-3.jpg', 'thumb': '/assets/img/gallery/hall1-3-thumb.jpg'},
  		{'src': '/assets/img/gallery/room1-1.jpg', 'thumb': '/assets/img/gallery/room1-1-thumb.jpg'},
  		{'src': '/assets/img/gallery/room1-2.jpg', 'thumb': '/assets/img/gallery/room1-2-thumb.jpg'},
  		{'src': '/assets/img/gallery/room1-3.jpg', 'thumb': '/assets/img/gallery/room1-3-thumb.jpg'},
  		{'src': '/assets/img/gallery/room1-4.jpg', 'thumb': '/assets/img/gallery/room1-4-thumb.jpg'},
  		{'src': '/assets/img/gallery/room1-5.jpg', 'thumb': '/assets/img/gallery/room1-5-thumb.jpg'},
  		{'src': '/assets/img/gallery/room1-6.jpg', 'thumb': '/assets/img/gallery/room1-6-thumb.jpg'},
  		{'src': '/assets/img/gallery/room2-1.jpg', 'thumb': '/assets/img/gallery/room2-1-thumb.jpg'},
  		{'src': '/assets/img/gallery/room2-2.jpg', 'thumb': '/assets/img/gallery/room2-2-thumb.jpg'},
  		{'src': '/assets/img/gallery/room2-3.jpg', 'thumb': '/assets/img/gallery/room2-3-thumb.jpg'},
  		{'src': '/assets/img/gallery/room2-4.jpg', 'thumb': '/assets/img/gallery/room2-4-thumb.jpg'},
      {'src': '/assets/img/gallery/room2-5.jpg', 'thumb': '/assets/img/gallery/room2-5-thumb.jpg'},
      {'src': '/assets/img/gallery/room2-6.jpg', 'thumb': '/assets/img/gallery/room2-6-thumb.jpg'},
      {'src': '/assets/img/gallery/room2-7.jpg', 'thumb': '/assets/img/gallery/room2-7-thumb.jpg'},
      {'src': '/assets/img/gallery/room3-1.jpg', 'thumb': '/assets/img/gallery/room3-1-thumb.jpg'},
      {'src': '/assets/img/gallery/room3-2.jpg', 'thumb': '/assets/img/gallery/room3-2-thumb.jpg'},
      {'src': '/assets/img/gallery/room3-3.jpg', 'thumb': '/assets/img/gallery/room3-3-thumb.jpg'},
      {'src': '/assets/img/gallery/room3-4.jpg', 'thumb': '/assets/img/gallery/room3-4-thumb.jpg'},
  		{'src': '/assets/img/gallery/room3-5.jpg', 'thumb': '/assets/img/gallery/room3-5-thumb.jpg'},
      {'src': '/assets/img/gallery/outside1-1.jpg', 'thumb': '/assets/img/gallery/outside1-1-thumb.jpg'},
      {'src': '/assets/img/gallery/outside1-2.jpg', 'thumb': '/assets/img/gallery/outside1-2-thumb.jpg'}
  	]

}
