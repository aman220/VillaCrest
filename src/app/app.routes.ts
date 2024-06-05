import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { VillasComponent } from './villas/villas.component';
import { ServiceComponent } from './service/service.component';
import { ContactusComponent } from './contactus/contactus.component';
import { VillaDetailsComponent } from './villa-details/villa-details.component';


export const routes: Routes = [
    { path: '', component: HomescreenComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'villas', component: VillasComponent },
    { path: 'services', component: ServiceComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'villa-details', component: VillaDetailsComponent },

];
