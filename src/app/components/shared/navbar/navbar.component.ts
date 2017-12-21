import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TranslateService } from 'ng2-translate';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {

  	spanishFlag: string;
	  galicianFlag: string;
	  englishFlag: string;

    currentLang = 'es';


    translate: TranslateService;

  	constructor(translate: TranslateService) { 
      this.translate = translate;
      this.translate.setDefaultLang('es');
  		this.spanishFlag = './assets/img/lenguageFlags/SpanishFlag.png';
  		this.galicianFlag = './assets/img/lenguageFlags/GalicianFlag.png';
  		this.englishFlag = './assets/img/lenguageFlags/EnglishFlag.png';
  	}

    changeLenguage(params){
      if (params == 0) { this.translate.setDefaultLang('es');};
      if (params == 1) { this.translate.setDefaultLang('ga');};
      if (params == 2) { this.translate.setDefaultLang('en');};
      //this.currentLang = this.translate.currentLang;
    }

    ngOnInit() {
      /* Collapse navbar when clicking outside */
      $(document).ready(function () {
        $(document).click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
            if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                $("button.navbar-toggler").click();
            }
        });
      });
    }





}
