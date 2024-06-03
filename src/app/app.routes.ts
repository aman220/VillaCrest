import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    { path: 'aboutus', component: AboutusComponent },
    { path: '', component: AppComponent },
];
