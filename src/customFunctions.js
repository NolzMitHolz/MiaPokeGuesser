import PokeListGen1 from './files/PokemonList/gen1List.json';
import PokeListGen2 from './files/PokemonList/gen2List.json';
import PokeListGen3 from './files/PokemonList/gen3List.json';
import PokeListGen4 from './files/PokemonList/gen4List.json';
import PokeListGen5 from './files/PokemonList/gen5List.json';
import PokeListGen6 from './files/PokemonList/gen6List.json';
import PokeListGen7 from './files/PokemonList/gen7List.json';
import PokeListGen8 from './files/PokemonList/gen8List.json';
import PokeListGen9 from './files/PokemonList/gen9List.json';

export function loadPokemonList(config) {
  let PokeList = [];

  if (config.gen1) PokeList = PokeList.concat(PokeListGen1);
  if (config.gen2) PokeList = PokeList.concat(PokeListGen2);
  if (config.gen3) PokeList = PokeList.concat(PokeListGen3);
  if (config.gen4) PokeList = PokeList.concat(PokeListGen4);
  if (config.gen5) PokeList = PokeList.concat(PokeListGen5);
  if (config.gen6) PokeList = PokeList.concat(PokeListGen6);
  if (config.gen7) PokeList = PokeList.concat(PokeListGen7);
  if (config.gen8) PokeList = PokeList.concat(PokeListGen8);
  if (config.gen9) PokeList = PokeList.concat(PokeListGen9);

  return PokeList;
}

//export function loadPokemonSelect() {}
