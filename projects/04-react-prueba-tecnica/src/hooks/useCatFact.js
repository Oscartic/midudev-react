import { useState, useEffect } from "react";
import { getRandomFact } from '../services/facts';

export function useCatFact () {
  const [fact, setFact] = useState('Lorem ipsum cat');

  const refreshRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact));
  }

  // fetch the cat quote when reload page
  useEffect(refreshRandomFact, [])
  
  return ({ fact, refreshRandomFact })
}