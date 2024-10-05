import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfertyComponent } from './oferty/oferty.component';
import { TerapieComponent } from './terapie/terapie.component';
import { CennikComponent } from './cennik/cennik.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { TerapiaIndywidualnaComponent } from './terapia-indywidualna/terapia-indywidualna.component';
import { TerapiaGrupowaComponent } from './terapia-grupowa/terapia-grupowa.component';
import { PoradaOnlineComponent } from './porada-online/porada-online.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'oferty', component: OfertyComponent },
  { path: 'terapie', component: TerapieComponent },
  { path: 'cennik', component: CennikComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'terapia-indywidualna', component: TerapiaIndywidualnaComponent },
  { path: 'terapia-grupowa', component: TerapiaGrupowaComponent },
  { path: 'porada-online', component: PoradaOnlineComponent },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
