import { useEffect, useState } from 'react';
import { getRandomFact } from './services/facts';
import { useCatImage } from './hooks/useCatImage'
import './App.css'


const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';



export function App () {
  const [fact, setFact] = useState('Lorem ipsum cat');
  const { imageUrl } = useCatImage({ fact });

  // fetch the cat quote when reload page
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact));
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
  };

  return (
    <main>
      <h1>App de gaticos</h1> 

      <button onClick={handleClick}>Get new fact</button>
      <p>{fact}</p>
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={fact} />}
    </main>
  ) 
} 