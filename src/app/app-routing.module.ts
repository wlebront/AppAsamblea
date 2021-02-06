import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsambleistaComponent } from './components/asambleista/asambleista.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditarComponent } from './components/editar/editar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { FotosComponent } from './components/fotos/fotos.component';
import { PerfilComponent } from './components/perfil/perfil.component';


const routes: Routes = [

  { path:'asambleista', component:AsambleistaComponent, canActivate: [ AuthGuard] },
  { path:'dashboard', component:DashboardComponent, canActivate: [ AuthGuard] },
  { path:'editar/:id', component:EditarComponent, canActivate: [ AuthGuard] },
  { path:'footer', component:FooterComponent, canActivate: [ AuthGuard] },
  { path:'perfil/:id', component:PerfilComponent, canActivate: [ AuthGuard] },
  { path:'fotos', component:FotosComponent, canActivate: [AuthGuard] },
  { path:'header', component:HeaderComponent, canActivate: [ AuthGuard] },
  { path:'login', component:LoginComponent },
  { path:'nuevo', component:NuevoComponent, canActivate: [ AuthGuard] },
  { path:'registro', component:RegistroComponent },


  { path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
