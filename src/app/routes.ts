import { Routes } from '@angular/router'
import { MainComponent } from './components/main/main.component';

export const mainRoutes: Routes = [
    {
        component: MainComponent,
        path: 'main',
    },
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
    }
];