import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ServicesComponent } from './components/services/services.component';
import { ThehouseComponent } from './components/thehouse/thehouse.component';
import { PricingComponent } from './components/pricing/pricing.component';

const APP_ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'gallery', component: GalleryComponent },
	{ path: 'reservation', component: ReservationComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'thehouse', component: ThehouseComponent },
	{ path: 'pricing', component: PricingComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);