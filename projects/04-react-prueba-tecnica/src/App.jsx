import { useEffect, useState } from 'react';
import './App.css'


const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`; 
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function App () {
  const [fact, setFact] = useState('Lorem ipsum cat');
  const [imageUrl, setImageUrl] = useState();
  
  // fetch the cat quote when reload page
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data;
        setFact(fact);
      }) 
  }, [])

  // recover image when we have quote
  useEffect(() => {
    if(!fact) return;
    const threeFirstWord = fact.split(' ', 3).join(' ');
    console.log(threeFirstWord);

    fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        const { url } = response;
        setImageUrl(url);
      })
  }, [fact])

  return (
    <main>
      <h1>App de gaticos</h1> 
      <p>{fact}</p>
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={fact} />}
    </main>
  ) 
} 