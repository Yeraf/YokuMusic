import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FooterComponent } from './footer/footer.component';

//Servicios
import { VLAMusicServices } from './Servicios/spotify.servicios';

//Rutas y modulos
import { APP_ROUTING } from "./app.routes";
import {HttpClientModule  } from "@angular/common/http";
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BusquedaComponent,
    FooterComponent,
    SearchComponent
  ],
  //Modulos
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [VLAMusicServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
