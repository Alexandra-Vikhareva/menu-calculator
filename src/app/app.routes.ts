import { Routes } from '@angular/router';
import { GreetingPage } from './pages/greeting-page/greeting-page';
import { MenuPage } from './pages/menu-page/menu-page';

export const routes: Routes = [
    {path: '', component: GreetingPage},
    {path: 'menu', component: MenuPage}
];
