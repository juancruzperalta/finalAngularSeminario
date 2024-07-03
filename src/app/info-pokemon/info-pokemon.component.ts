import { Component } from '@angular/core';

@Component({
  selector: 'app-info-pokemon',
  standalone: true,
  imports: [],
  template: `
    <section>
      <div>
        <h1>La historia de Pokemon's</h1>
        <p>
          Pokémon es una franquicia de medios que originalmente comenzó como un
          videojuego RPG, pero debido a su popularidad ha logrado expandirse a
          otros medios de entretenimiento como series de televisión, películas,
          juegos de cartas, ropa, entre otros, convirtiéndose en una marca que
          es reconocida en el mercado mundial.
        </p>
        <p>
          <span>Entrenador Pokémon</span>

          A los usuarios de los videojuegos se los denomina Entrenador Pokémon.
          Tienen como meta cumplir dos objetivos (en la mayoría de los juegos de
          Pokémon): capturar a todas las especies de pokémon disponibles en la
          región ficticia en donde se encuentra ambientado el juego, y completar
          así la información de todos los pokémon en el Pokédex; por otro lado,
          deben entrenarlos y enfrentarlos a otros pokémon pertenecientes a
          otros entrenadores para demostrar sus habilidades, fortaleza, talento
          y así convertirse en un Maestro Pokémon. Para lograrlo, los
          entrenadores pokémon viajan a lo largo y ancho de las regiones del
          mundo Pokémon, recolectando medallas de gimnasio, que se obtienen tras
          derrotar a los respectivos líderes de gimnasio, en una batalla en la
          que tanto el entrenador como el líder de gimnasio enfrentan a sus
          pokémon para probar sus habilidades especiales en una batalla Pokémon.
        </p>
      </div>
    </section>
  `,
  styles: `
  section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;
  }
  span{
    font-weight: bold;
  }`,
})
export class InfoPokemonComponent {}
