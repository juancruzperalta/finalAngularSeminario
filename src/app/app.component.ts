import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FavoritePokemon } from './favorite-pokemon';
import { GamesComponent } from './games/games.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    GamesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  favoritePokemon: FavoritePokemon | any;

  onFavoritePokemonSelected(pokemon: FavoritePokemon) {
    this.favoritePokemon = pokemon;
  }
}
