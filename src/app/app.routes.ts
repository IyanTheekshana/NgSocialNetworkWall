import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
{
    path:'login',
    component:LoginComponent
},
{
    path:'create-account',
    component:CreateAccountComponent
}
];
