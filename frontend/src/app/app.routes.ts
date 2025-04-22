import { Routes } from '@angular/router';
import { EmailComponent } from './components/email/email.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path:"sendemail",
        component:EmailComponent,
        pathMatch:"full"
    },
    {
        path:"",
        component:HomeComponent,
        pathMatch:"full"
    }
];
