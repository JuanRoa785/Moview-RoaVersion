import  './DetallePelicula.css'
import React from 'react'



function detallePelicula() {
    return (
        <div className='DP-container'>
        <div className='infoBasica'>
        <div className='DP-posterContainer'>
        <img id="DP-poster"
        src='https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/IRN2ZUZFANAXVNKJZL62RNJEB4.jpg' 
        alt="Poster image" />
        </div>

        <div className='DP-detalles'>
            <div id='DP-titulo'><h2>Cruella</h2></div>
            <div className='DP-datos'>
                <p>Rating: PG-13</p>
                <p id='DP-año'>Año: 2021</p> 
                <p id='DP-generos'>Generos: Comedy/Kids & family</p>
            </div>
            
        </div>
        </div>
        </div>
    );
  }

export default detallePelicula;