import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { RecaptchaModule } from 'ng2-recaptcha';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';

// Routes
import { APP_ROUTING } from './app.routes';
import { MailService, IMessage } from './mail.service';

// Cookie law banner
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieLawModule } from 'angular2-cookie-law';

// Services

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ServicesComponent } from './components/services/services.component';
import { ThehouseComponent } from './components/thehouse/thehouse.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { HowtogetComponent } from './components/howtoget/howtoget.component';
import { CookieusageComponent } from './components/cookieusage/cookieusage.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './components/termsandconditions/termsandconditions.component';
import { ConfirmComponent } from './components/shared/confirm/confirm.component';

export function httpFactory(http: Http){
  return new TranslateStaticLoader(http, './assets/translate', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ReservationComponent,
    ServicesComponent,
    ThehouseComponent,
    FooterComponent,
    PricingComponent,
    HowtogetComponent,
    CookieusageComponent,
    PrivacypolicyComponent,
    TermsandconditionsComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    CookieLawModule,
    BootstrapModalModule.forRoot({container:document.body}),
    RecaptchaModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: httpFactory,
      deps: [Http]
    }),
    APP_ROUTING
  ],
  entryComponents: [
    ConfirmComponent
  ],
  exports: [BrowserModule],
  providers: [MailService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
