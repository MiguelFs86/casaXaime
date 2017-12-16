import { Component, OnInit } from '@angular/core';
import { MailService, IMessage } from '../../mail.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html'
})
export class ReservationComponent implements OnInit {

	message: IMessage = {};
	//captcha_solved:boolean = false;
	form_data ={
		name: '',
		surname: '',
		email: '',
		checkindate: '',
		checkoutdate: '',
		room_selector: '',
		comments: '',
		captcha: '',
		agree: ''
	}; 

  	constructor(private mailService: MailService) { }

  	ngOnInit() {
  		window.scrollTo(0, 0);
  	}

  	clearForm(){
  		this.form_data ={
		name: '',
		surname: '',
		email: '',
		checkindate: '',
		checkoutdate: '',
		room_selector: '',
		comments: '',
		captcha: '',
		agree: ''
	}; 
  	}

  	send(form: IMessage){
  		console.log(form);
  		this.mailService.sendEmail(form).subscribe(res => {
	      console.log('Reservation Success', res);
	      if (res.status == 200){
	      	/* Show popup with OK message */

	      	/* Clear form */
	      	this.clearForm();
	      	window.alert("Todo OK");
	      }
	    }, error => {
	      //console.log('Reservation Error', error);
	      /* Show error popup */
	      window.alert("Error");
	      
	    });
  	}

 	resolved(captchaResponse: string) {
 		//this.captcha_solved = true;
        console.log(`Resolved captcha with response ${captchaResponse}:`);
        console.log(captchaResponse);
    }
}
