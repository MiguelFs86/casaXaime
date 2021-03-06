import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Translate module
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

// Captcha solver module
import { RecaptchaModule } from 'ng2-recaptcha';

// Routes
import { APP_ROUTING } from './app.routes';

// Cookie law banner
import { CookieLawModule } from 'angular2-cookie-law';

// Services
import { MailService, IMessage } from './mail.service';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    CookieLawModule,
    RecaptchaModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: httpFactory,
      deps: [Http]
    }),
    APP_ROUTING
  ],
  exports: [BrowserModule],
  providers: [MailService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
