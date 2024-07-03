import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokeapiService } from '../services/api.service';
import { FavoritePokemon } from '../favorite-pokemon';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GamesComponent, CommonModule],
  template: ` <h3>Los Pokemons</h3>
    <ul>
      <li *ngFor="let pokemon of pokemonList">
        Pokemon:
        <button (click)="pokemonFavorite(pokemon)">
          {{ pokemon.name }}
        </button>
      </li>
    </ul>`,
  styles: `ul{
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;  
  }
    li{
      border: 1px solid black;
    text-decoration: none;
    list-style: none;
    padding: 1rem;
  }
  button{
    font-weight: bold;
  }
  `,
})
export class GamesComponent implements OnInit {
  @Output() favoritePokemon = new EventEmitter<FavoritePokemon>();
  pokemonList: any[] = [];

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit(): void {
    this.pokeapiService.getPokemonList().subscribe((data) => {
      this.pokemonList = data.results;
    });
  }
  pokemonFavorite(pokemon: any) {
    // Emite un objeto que cumpla con la interfaz FavoritePokemon
    const favoritePokemon: FavoritePokemon = {
      name: pokemon.name,
    };
    this.favoritePokemon.emit(favoritePokemon);
  }
}
