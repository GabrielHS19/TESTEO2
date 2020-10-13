import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { GuardarGuard } from './guardar.guard';
import {MapComponent} from './map/map.component'

const routes: Routes = [
  
  {
    path: '',
    component:LoginComponent,
    
  },
  {
    path: 'registro',
    component:RegistroComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'mapa',
    component:MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
