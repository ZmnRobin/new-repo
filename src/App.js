import './App.css';
import data from './fakeData/fakeData.json';
import { useState } from 'react';

function App() {
  const[player,setPlayer]=useState(data);
  const[myTeam,setMyTeam]=useState([]);
  const [price,setPrice]=useState(0);

  return (
    <div>
      <div className='row'>
        <div className='col-md-8'>
           <div className='row'>
            {
              player.map(player=>{
                return(
                  <div className='col-md-3' key={player.id}>
                    <div className='card'>
                      <img src={player.img} className='card-img-top' alt='...' />
                      <div className='card-body'>
                        <h5 className='card-title'>{player.name}</h5>
                        <p className='card-text'>Base value : {player.baseValue} million dolar</p>
                        <p className='card-text'>Club name : {player.club}</p>
                        <p className='card-text'>Base value : {player.baseValue} million dolar</p>
                        <p className='card-text'>Base value : {player.baseValue} million dolar</p>
                        <button className='btn btn-primary' onClick={()=>{
                          setMyTeam([...myTeam,player]);
                          setPrice(price+player.baseValue);
                        }}>Add</button>
                      </div>
                    </div>
                  </div>
                )
              })
              }
           </div>
          </div>
        <div className='col-md-4'>
          <h1>Number of added player : {myTeam.length}</h1>
          <h1>Total cost : {price} million dolar</h1>
          {
            myTeam.map(player=>{
              return(
                <div className='card' key={player.id}>
                  <div className='card-body'>
                    <h5 className='card-title'>{player.name}</h5>
                    <p>{player.baseValue} million dolar</p>
                  </div>
                </div>
              )
            })
          }
          </div>
      </div>
    </div>
  );
}

export default App;
