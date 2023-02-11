import { useState } from "react";

export function TwitterFollowCard ({ userName, name, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'orb-followCard-button is-following' : 'orb-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    console.log('TwitterFollowCard, ', name)

    return (
        <article className='orb-followCard'>
        <header className='orb-followCard-header'>
            <img 
                className='orb-followCard-avatar' 
                src={`https://unavatar.io/${userName}`} 
                alt="avatar oscartic" 
            />
            <div className='orb-followCard-info'>
                <strong>{ name }</strong>
                <span className='orb-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>
  
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className="orb-followed-text">{text}</span>
                    <span className="orb-followed-stopFollow">Dejar de Seguir</span>    
                </button>
            </aside>
      </article>
    )
}