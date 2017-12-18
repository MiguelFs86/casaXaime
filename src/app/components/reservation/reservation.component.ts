import { Component, OnInit } from '@angular/core';
import { MailService, IMessage } from '../../mail.service';
import { DialogService } from 'ng2-bootstrap-modal';
 import { ConfirmComponent } from '../shared/confirm/confirm.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html'
})
export class ReservationComponent implements OnInit {

	message: IMessage = {};
	//captcha_solved:boolean = false;
	form_data ={
		name: 'aa',
		surname: 'aa',
		email: 'aa',
		checkindate: '01-01-1900',
		checkoutdate: '01-01-1900',
		room_selector: '2 habitaciones',
		comments: 'aa',
		captcha: '',
		agree: 'true'
	}; 

  	constructor(private dialogService:DialogService, private mailService: MailService) { }

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

  	send(form: IMessage){
  		console.log(form);
  		this.mailService.sendEmail(form).subscribe(res => {
	      console.log('Reservation Success', res);
	      if (res.status == 200){
	      	/* Show popup with OK message */
	      	var title = "Solicitud de reserva enviada con éxito";
	      	var message = "Su solicitud ha sido de reserva ha sido enviada con éxito. Nos pondremos en contacto con usted por correo electrónico para confirmar la reserva.";
	      	this.showPopup(title, message);
	      	/* Clear form */
	      	this.clearForm();	      	
	      	
	      }
	    }, error => {
	      //console.log('Reservation Error', error);
	      /* Show error popup */
	      var title = "Ha ocurrido un error";
	      var message = "No ha sido posible enviar la solicitud. Por favor, inténtelo más tarde.";
	      this.showPopup(title, message);    
	    });
  	}

 	resolved(captchaResponse: string) {
 		//this.captcha_solved = true;
        console.log(`Resolved captcha with response ${captchaResponse}:`);
        console.log(captchaResponse);
    }
}
