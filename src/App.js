import { useEffect, useState } from 'react';
import { Box, Button, Typography, Grid, Container} from '@mui/material';

import Pokedex from 'pokedex-promise-v2'
import Pokemon from './components/Pokemon';
import { Iplayer } from './utils/playerInterface';
import scrapePokemon from './utils/scrapePokemon';
import scrapeType from './utils/scrapeType';
import { borderRadius } from '@mui/system';

function App() {
  const P = new Pokedex();
  const [ player1, setPlayer1 ] = useState(Iplayer);
  const [ player2, setPlayer2 ] = useState(Iplayer);
  const [ fetchError, setFetchError ] = useState(false);
  const [ gameStart, setGameStart ] = useState(false);
  const [ roundWinner, setRoundWinner ] = useState("");
  const [ victor, setVictor] = useState("");

  useEffect(()=> {
    if( player1.lives === 0 || player2.lives === 0) {
      setGameStart(false);
      setRoundWinner(null)
      player1.lives === 0 && setVictor("player1");
      player2.lives === 0 && setVictor("player2");

    }
  })

  const fetchPokemons = async () => {
    try {
      //Fetch two random pokemons utilizing pokeapi
      const pokemon1Res = await P.getPokemonByName(Math.floor(Math.random() * 152) + 1);
      const pokemon2Res = await P.getPokemonByName(Math.floor(Math.random() * 152) + 1);
      const pokemon1 = scrapePokemon(pokemon1Res);
      const pokemon2 = scrapePokemon(pokemon2Res);

      updatePlayerPokemon("player1", pokemon1);
      updatePlayerPokemon("player2", pokemon2);
      setGameStart(true);
    } catch {
      setFetchError(true);
    }
  }

  const updatePlayerPokemon = (option, data) => {
    if (option === "player1") {
      setPlayer1( prevValues => ({...prevValues, pokemon: data}));
    }
    if(option === "player2") { 
      setPlayer2( prevValues => ({...prevValues, pokemon: data}));
    }
  }

  const decreaseRerolls = (player) => {
    if (player === "player1") {
      if (player1.rerolls === 0) return;
      setPlayer1(prevValues => ({...prevValues, rerolls: prevValues.rerolls -1 }));
    }
    if (player === "player2") {
      if (player2.rerolls === 0) return;
      setPlayer2(prevValues => ({...prevValues, rerolls: prevValues.rerolls -1 }));
    }
  }

  // ----- Event Handlers
  const handleGameStart = () => {
    setPlayer1(Iplayer);
    setPlayer2(Iplayer);
    setVictor(false);
    setGameStart(true);
    fetchPokemons();
  }

  const HandlePokemonReroll = async (e) => {
    const { name: playerName } = e.target;
    let hasRolls = 0;
    if (playerName === "player1") hasRolls = player1.rerolls;
    if (playerName === "player2") hasRolls = player2.rerolls;
    if (hasRolls === 0) return;
    try {
      const pokemonRes = await P.getPokemonByName(Math.floor(Math.random() * 152) + 1);
      const pokemon = scrapePokemon(pokemonRes);
      decreaseRerolls(playerName)
      updatePlayerPokemon(playerName, pokemon);
    } catch {
      setFetchError(true);
    }
  }

  const handleFight = async () => {
    // Make an array of all possible weaknesses for the first pokemon
    let typeRes = await P.getTypeByName(player1.pokemon.types);
    const pokemon1Strengths = scrapeType(typeRes);

    typeRes = await P.getTypeByName(player2.pokemon.types);
    const pokemon2Strengths = scrapeType(typeRes);

    // Get the score
    const player1Points = countPoints(pokemon1Strengths, player2.pokemon.types);
    const player2Points = countPoints(pokemon2Strengths, player1.pokemon.types);
    //console.log(player1Points, "p1", player2Points, "points")

    if (player1Points > player2Points) {
      setRoundWinner("player1");
      setPlayer2(prevValues => ({...prevValues, lives: prevValues.lives - 1}));
    }
    else if (player1Points < player2Points) {
      setRoundWinner("player2");
      setPlayer1(prevValues => ({...prevValues, lives: prevValues.lives - 1}));
    }
    else {
      setRoundWinner("draw");
    }
    fetchPokemons();
  }
  console.log("rendered")

  return (
    <div className="App">
      <Container sx={{  
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px"
        }}>
        <Typography variant="h2">PokeDuel</Typography>
        <Grid 
          container 
          sx={{ background: "#E8F9FD", borderRadius: "5px"}}
          justifyContent="center"
          alignItems="center"
          columnGap={4}
          rowGap={4}
          paddingY={4}
          xs={2}
          md={8}
        > 
          <Grid item 
          > 
            <Pokemon
              sprite= {player1.pokemon.sprite}
              species= {player1.pokemon.species}
              type={player1.pokemon.types[0]}
              typeSecondary={player1.pokemon.types[1] && player1.pokemon.types[1]}
              lives={player1.lives}
              rerolls={player1.rerolls}
            />
            <Box sx={{display: "flex", justifyContent:"center"}}>
              <Button name="player1" variant="contained" onClick={HandlePokemonReroll} disabled={!gameStart}>reroll</Button>
            </Box>
          </Grid>

          <Grid item>
            <Typography>VS</Typography>
          </Grid>

          <Grid item>
            <Pokemon
              sprite= {player2.pokemon.sprite}
              species= {player2.pokemon.species}
              type={player2.pokemon.types[0]}
              typeSecondary={player2.pokemon.types[1] && player2.pokemon.types[1]}
              lives={player2.lives}
              rerolls={player2.rerolls}
            />
            <Box sx={{display: "flex", justifyContent:"center"}}>
              <Button name="player2" variant="contained" onClick={HandlePokemonReroll} disabled={!gameStart}>reroll</Button>
            </Box>
          </Grid>
        </Grid>

        <Typography variant='h4'> 
          {!victor && !roundWinner && "Battle!"}
          {roundWinner === "player1" && "Player 1 Wins" }
          {roundWinner === "player2" && "Player 2 Wins" }
          {roundWinner === "draw" && "Draw" }
          {victor ==="player1" ? "Player 1 Wins!" 
          : victor==="player2" && "Player 2 Wins!"}
        </Typography>

        <Box>
          <Button variant="contained" onClick={handleGameStart} disabled={gameStart}>start</Button>
          <Button variant="contained" onClick={handleFight} disabled={!gameStart}>Fight</Button>
        </Box>
      </Container>
    </div>
  );
}

const countPoints = (strengths, opponentTypes) => {
  let points = 0;
  //Compares 
  opponentTypes.forEach(t => {
    if (strengths.includes(t)) points += 1;
  });
  return points; 
}

export default App;
