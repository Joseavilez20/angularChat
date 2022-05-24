import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './modules/public/public.component';
import { RUTAS_PUBLICAS } from '../routes/public/public.routes'
import { PrivateComponent } from './modules/private/private.component';
import { RUTAS_DASHBOARD } from 'src/routes/private/dashboard.routes';


const routes: Routes = [
  { path: 'home', component: PublicComponent, children: RUTAS_PUBLICAS },
  { path: 'admin', component: PrivateComponent, children: RUTAS_DASHBOARD },
  { path: '', redirectTo: 'home/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
