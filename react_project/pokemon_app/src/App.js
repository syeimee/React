import { useEffect, useState } from 'react';
import './App.css';
import {getAllPokemon, getPokemon} from "./utils/pokemon"
import Card from './component/Card/Card';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon"
  /*--------------------
  loadingがtrueの時はloading画面を表示
  falseの時は完了を表示
  -------------------*/
  const[loading, setLoading] = useState(true);
  const[pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    const fetchPokemonData = async () =>{
      //全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      //各ポケモンの詳細なデータを取得
      loadingPokemon(res.results);
      setLoading(false);
    }
    fetchPokemonData();
  },[])

  //ロードされたURLをさらに処理
  const loadingPokemon = async(data) =>{
    //全てのポケモンに対して.allを行う
    let _pokemonData = await Promise.all(
      data.map((pokemon) =>{
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);

  }
  console.log(pokemonData);

  return (
    <div className="App">
      {loading ? (<h1>NOW LOADING...</h1>) : (
        <div className = "pokemonCardContainer">
          {pokemonData.map((pokemon,i) => {
            return <Card key = {i} pokemon = {pokemon}/>
          })}
        </div>        

      )}
    </div>
  );
}

export default App;
