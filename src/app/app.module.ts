import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { MarkerService } from './_services/marker.service';
import { PopUpService } from './_services/pop-up.service';
import { ShapeService } from './_services/shape.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    
    AppComponent,
    MapComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [
    MarkerService,
    PopUpService,
    ShapeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
