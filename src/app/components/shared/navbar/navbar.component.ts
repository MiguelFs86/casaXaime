import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  	spanishFlag: string;
	  galicianFlag: string;
	  englishFlag: string;

    translate: TranslateService;

  	constructor(translate: TranslateService) { 
      this.translate = translate;
      this.translate.setDefaultLang('es');
  		this.spanishFlag = '/assets/img/lenguageFlags/SpanishFlag.png';
  		this.galicianFlag = '/assets/img/lenguageFlags/GalicianFlag.png';
  		this.englishFlag = '/assets/img/lenguageFlags/EnglishFlag.png';
  	}

    changeLenguage(params){
      if (params == 0) { this.translate.setDefaultLang('es'); };
      if (params == 1) { this.translate.setDefaultLang('ga'); };
      if (params == 2) { this.translate.setDefaultLang('en'); };
  }  

  ngOnInit() {

  }



}
