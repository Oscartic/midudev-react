import { useEffect, useState } from 'react';
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

export function App () {
  const { fact, refreshRandomFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshRandomFact()
  };

  return (
    <main>
      <h1>App de gaticos</h1> 
      <button onClick={handleClick}>Get new fact</button>
      <p>{fact}</p>
      {imageUrl && <img src={imageUrl} alt={fact} />}
    </main>
  ) 
} 