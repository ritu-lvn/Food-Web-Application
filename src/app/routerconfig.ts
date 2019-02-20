import  { Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { OrderusComponent } from './orderus/orderus.component';
import { LoginComponent} from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';

export const appRoutes: Routes = [
    { path: 'home',
    component: HomeComponent },
    
    { path: 'contactus',
    component: ContactusComponent },
    
    { path: 'aboutus',
    component: AboutusComponent },

    { path: 'orderus',
    component: OrderusComponent },

    { path: 'login',
    component: LoginComponent },

    { path: 'forgot',
    component: ForgotComponent },

    { path: 'signup',
    component: SignupComponent },

        {
        path:'',
        //redirectTo: 'home',
        component:HomeComponent,
        pathMatch: 'full'
    }]








