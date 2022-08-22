import './App.css';
import React, { useEffect, useState } from 'react';
import {getGamesByManyCategories} from './routes/GamesRoutes';
import {AdvancedFilter} from './components/AdvancedFilter';
import Table from './components/Table';



export default function App(){
  const [game, setGame] = useState();
  const [notFound, setNotFound] = useState(false)

  async function setFilter(category, platform){
    const response = await getGamesByManyCategories(category, platform);
    console.log(response)
    if(!response.some(item => item.status !== 0)){
      setNotFound(true);
    }else{
      setNotFound(false);
      const idList = response.map(item => item.id)
      const indexGame = Math.floor(Math.random() * idList.length)
      setGame(response.find(item => item.id === idList[indexGame]))
    }
    
  }
  return (
    <div className="App">
      <header className="App-header">
      <AdvancedFilter submitFilter={setFilter}/>
      {!notFound ? (
        game && (
          <Table gameData={game}/>
        )
       
      ):(
        <p style={{color:'red'}}>Não foi encontrado nenhum jogo, tente filtrar novamente!</p>
      )}
      </header>
    </div>
  );
}



