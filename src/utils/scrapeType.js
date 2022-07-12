const scrapeType = (types) => {
    const strengths = [];
    types.forEach( type => {
        const double_damage_to = type.damage_relations.double_damage_to;
        // //Cleans Response to just be a string
        const advantage = double_damage_to.map((t) => t.name );
        //strengths = advantage.map(t => t);
        advantage.forEach(t => strengths.push(t))
    })
    return strengths;
  }
  export default scrapeType;