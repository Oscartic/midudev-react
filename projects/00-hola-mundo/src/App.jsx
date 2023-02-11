import { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {

  const users = [
    {
      userName: 'Oscartic',
      name: 'Oscar Ballesteros',
      isFollowing: true

    },
    {
      userName: 'Diluchial',
      name: 'Diana Lopez',
      isFollowing: true

    },
    {
      userName: 'Juanpi',
      name: 'Juan Pablo Ballesteros',
      isFollowing: true

    },
    {
      userName: 'Sami',
      name: 'Samuel Ballesteros',
      isFollowing: false

    },
  ]

  return (
    <section className='app'>
      {users.length > 0 &&
        users.map(({userName, name, isFollowing}) => (
          <TwitterFollowCard 
            key={userName}
            userName={userName} 
            name={name} 
            initialIsFollowing={isFollowing} 
          />
        ))
      }
    </section>
  );
}