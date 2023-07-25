import React,{useState} from 'react';

function clickedTile(index,schimbaVizibilitate,functieClick){
    console.log('clicked tile with index'+index);
    schimbaVizibilitate('visible');
    functieClick();
}

function Tile(props){
    let [visible,setVisible]=useState('invisible');
    
    return <div className='tile rounded-md'
    onClick={(event)=> clickedTile(props.index,setVisible)}>
    <img src={'https://raw.githubusercontent.com/miezuit/html-css-python/main/js/memory/img/icons8-' + props.tile + '.png'}
    alt={props.altText}
    data-culoare={props.culoare}
    className={visible}
    />
  {/* {props.shown} */}
  </div>
}
export default Tile;