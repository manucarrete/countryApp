import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { CountryPageComponent } from './countries/pages/country-page/country-page.component';


export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'countries/id/:id', component: CountryPageComponent },
    { path: 'countries', 
        loadChildren: () => import('./countries/country.routes').then(m =>
            m.routes)
    },
];
