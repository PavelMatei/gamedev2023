import logo from './logo.svg';
import './App.css';
import Tile from './Tile';
import { useState } from 'react';

function shuffle(tiles){
  for(let i=tiles.length -1;i>0;i--){
    const j=Math.floor (Math.random()*tiles.length);//[0;1)
    console.log('exchange'+i+'with'+j);
    [tiles[i],tiles[j]]=[tiles[j],tiles[i]]
  }
  console.log(tiles);
}
function App() {
  let[noShown,setNoShown]=useState(0);
  function useState(){
    setNoShown(setNoShown + 1);
    console.log('No shown: '+noShown)
  }
  let objects=['bear','corgi','crab','fish','panda','parrot','pig','rabbit','rhinoceros','shark','snail','turtle'];
  objects=[...objects, ...objects];
  // const array1=[1,4,9,16];
  let a=5;
  let b=6;
  [a,b]=[b,a];
  console.log(a,b)
  shuffle(objects)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='underline'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='grid grid-cols-6 gap-4 justify-items-center'>
        {objects.map(function(object, index){
          return <Tile 
            tile={object}
            altText={'icon of '+object}
            culoare={'rosu'}
            index={index} />
        })}
        {/* {array1.map(x=>x*2+'')}
        {array1.map(function(x){
          return x*2;
        })} */}
        {/* {objects.forEach(function(object){
          console.log(object,' in foreach');
          return <div>{object}</div>
        })} */}
        {/* Shown:{this.} */}
      </div>
    </div>
  )
}

export default App;
