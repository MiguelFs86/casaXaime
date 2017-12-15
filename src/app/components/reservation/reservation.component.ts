import { Component, OnInit } from '@angular/core';
import { MailService, IMessage } from '../../mail.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html'
})
export class ReservationComponent implements OnInit {

	message: IMessage = {};

  	constructor(private mailService: MailService) { }

  	ngOnInit() {
  		window.scrollTo(0, 0);
  	}

  	send(form: IMessage){
  		console.log(form);
  		this.mailService.sendEmail(form).subscribe(res => {
	      console.log('Reservation Success', res);
	      if (res.status == 200){
	      	/* Show popup with OK message */
	      	/* Clear form */
	      	window.alert("Todo OK");
	      }
	    }, error => {
	      //console.log('Reservation Error', error);
	      /* Show error popup */
	      window.alert("Error");
	    });
  	}
}
