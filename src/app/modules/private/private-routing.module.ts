import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListarUsuariosComponent } from './admin/users/listar-usuarios/listar-usuarios.component';
import { ProfileComponent } from './profile/profile.component';
import { CrearUsuarioComponent } from './admin/users/crear-usuario/crear-usuario.component';
import { CrearPublicacionComponent } from './admin/publications/crear-publicacion/crear-publicacion.component';
import { ListarPublicacionesComponent } from './admin/publications/listar-publicaciones/listar-publicaciones.component';
import { TeamComponent } from './admin/team/team.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  //Inicio
  { path: '', component: DashboardComponent},
  //Profile
  { path: 'profile', component: ProfileComponent },
  //Users
  { path: 'crearusuario', component: CrearUsuarioComponent},
  { path: 'listarusuarios', component: ListarUsuariosComponent },
  //Publications
  { path: 'crearpublicacion', component: CrearPublicacionComponent },
  { path: 'listarpublicaciones', component: ListarPublicacionesComponent },
  //Team
  { path: 'team', component: TeamComponent},
  //Ayuda
  { path: 'help', component: HelpComponent}
  


  /*
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: LoginComponent },*/
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrivateRoutingModule { }
