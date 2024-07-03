import { Routes } from '@angular/router';
import { InfoPokemonComponent } from './info-pokemon/info-pokemon.component';
import { TiposPokComponent } from './tipos-pok/tipos-pok.component';
export const routes: Routes = [
  { path: 'historia', component: InfoPokemonComponent },
  { path: 'tipos', component: TiposPokComponent },
];
