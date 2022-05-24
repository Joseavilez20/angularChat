import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { ListarUsuariosComponent } from './admin/users/listar-usuarios/listar-usuarios.component';
import { HeaderComponent } from './admin/header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { CrearUsuarioComponent } from './admin/users/crear-usuario/crear-usuario.component';
import { CrearPublicacionComponent } from './admin/publications/crear-publicacion/crear-publicacion.component';
import { ListarPublicacionesComponent } from './admin/publications/listar-publicaciones/listar-publicaciones.component';
import { HelpComponent } from './help/help.component';
import { TeamComponent } from './admin/team/team.component';



@NgModule({
  declarations: [
    PrivateComponent,
    DashboardComponent,
    HeaderComponent,
    SideBarComponent,
    ListarUsuariosComponent,
    ProfileComponent,
    CrearUsuarioComponent,
    CrearPublicacionComponent,
    ListarPublicacionesComponent,
    HelpComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
