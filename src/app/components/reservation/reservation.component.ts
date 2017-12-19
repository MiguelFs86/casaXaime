import { Component, OnInit } from '@angular/core';
import { MailService, IMessage } from '../../mail.service';
 import { ConfirmComponent } from '../shared/confirm/confirm.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html'
})
export class ReservationComponent implements OnInit {

	message: IMessage = {};
	modal_title: string = '';
	modal_message: string = '';
	//captcha_solved:boolean = false;
	/*
	form_data ={
		name: 'aa',
		surname: 'aa',
		email: 'aa',
		checkindate: '2017-12-12',
		checkoutdate: '2017-12-12',
		room_selector: '2 habitaciones',
		comments: 'aa',
		captcha: '',
		agree: 'true'
	};
	*/
		form_data ={
		name: '',
		surname: '',
		email: '',
		checkindate: '',
		checkoutdate: '',
		room_selector: '',
		comments: '',
		captcha: '',
		agree: false
	};

  	constructor(private mailService: MailService) { }

  	ngOnInit() {
  		window.scrollTo(0, 0);
  	}

  	clearForm(){
  		this.modal_title = '';
  		this.modal_message = '';
  		this.form_data ={
			name: '',
			surname: '',
			email: '',
			checkindate: '',
			checkoutdate: '',
			room_selector: '',
			comments: '',
			captcha: '',
			agree: false
		}; 
  	}

  	/*
  	showPopup(tit:string, mess: string){
  		let disposable = this.dialogService.addDialog(ConfirmComponent, {
            title: tit, 
            message:mess})
            .subscribe((isConfirmed)=>{
            //We get dialog result
                if(isConfirmed) {
                    window.scrollTo(0, 0);
                }
            });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            setTimeout(()=>{
                disposable.unsubscribe();
            },1000000);
  	}
  	*/

  	send(form: IMessage){
  		console.log(form);
  		window.scrollTo(0, 0);
  		this.mailService.sendEmail(form).subscribe(res => {
	      console.log('Reservation Success', res);
	      if (res.status == 200){
	      	/* Show popup with OK message */
	      	this.modal_title = "Solicitud de reserva enviada con éxito";
	      	this.modal_message = "Su solicitud ha sido de reserva ha sido enviada con éxito. Nos pondremos en contacto con usted por correo electrónico para confirmar la reserva.";
	      	//this.showPopup(title, message);
	      	/* Clear form */
	      	this.clearForm();	      	
	      	
	      }
	    }, error => {
	      //console.log('Reservation Error', error);
	      /* Show error popup */
	      this.modal_title = "Ha ocurrido un error";
	      this.modal_message = "No ha sido posible enviar la solicitud. Por favor, inténtelo más tarde.";
	      //this.showPopup(title, message);    
	    });
  	}

 	resolved(captchaResponse: string) {
 		//this.captcha_solved = true;
        console.log(`Resolved captcha with response ${captchaResponse}:`);
        console.log(captchaResponse);
    }
}
