import { Routes } from '@angular/router';

export const RUTAS_PUBLICAS: Routes = [

    {
        path: '', loadChildren: () => import('../../app/modules/public/public.module').then(m => m.PublicModule)
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];