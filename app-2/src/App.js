import {useState, useEffect} from 'react';
import axios from 'axios';
import ListItem from './Components/ListItem';
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
      setPokemon(res.data.results)
    })
  }, [])

  const mappedPokemon = pokemon.map((el, i) => {
    return <ListItem key={i} pokemon={el.name} />
  })

  return (
    <div className='App'>
      {mappedPokemon}
    </div>
  )
}

export default App;