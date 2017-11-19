import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

// Routes
import { APP_ROUTING } from './app.routes';

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

export function httpFactory(http: Http){
  return new TranslateStaticLoader(http, '/assets/translate', '.json');
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
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: httpFactory,
      deps: [Http]
    }),
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
