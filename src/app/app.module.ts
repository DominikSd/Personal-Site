import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OfertyComponent } from './oferty/oferty.component';
import { TerapieComponent } from './terapie/terapie.component';
import { CennikComponent } from './cennik/cennik.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { TerapiaIndywidualnaComponent } from './terapia-indywidualna/terapia-indywidualna.component';
import { TerapiaGrupowaComponent } from './terapia-grupowa/terapia-grupowa.component';
import { PoradaOnlineComponent } from './porada-online/porada-online.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OfertyComponent,
    TerapieComponent,
    CennikComponent,
    GaleriaComponent,
    TerapiaIndywidualnaComponent,
    TerapiaGrupowaComponent,
    PoradaOnlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
