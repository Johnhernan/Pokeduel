const scrapePokemon = (data) => {
    const types = [];
    data.types.forEach(t => types.push(t.type.name))
    
    const pokemon = {
      species: data.species.name,
      types: types,
      sprite: data.sprites.front_default
    };
    return pokemon;
  }
  export default scrapePokemon;