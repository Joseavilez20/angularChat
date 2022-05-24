import {  Routes } from '@angular/router';

export const RUTAS_DASHBOARD: Routes = [

    {
        path: 'dashboard', loadChildren: () => import('../../app/modules/private/private.module').then(m => m.PrivateModule)
    },
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];