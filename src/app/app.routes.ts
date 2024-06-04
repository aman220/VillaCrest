import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { VillasComponent } from './villas/villas.component';


export const routes: Routes = [
    { path: '', component: HomescreenComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'villas', component: VillasComponent },

];
