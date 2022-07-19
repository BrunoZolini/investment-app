import React, { useEffect, useState } from 'react';
import UserHeaderBar from './UserHeaderBar'

export default function Header() {
  const [isUserClicked, setIsUserClicked] = useState(false)
  const [loading, setLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser')) || {};
    setCurrentUser(user);
    setLoading(true);
  }, []);

  return (
    <header>      
        { loading  &&
          <button
          type="button"
          onClick={() => setIsUserClicked(!isUserClicked)}
          >            
            <p>{currentUser.name[0].toUpperCase()}</p>
            <p>{currentUser.name}</p>
          </button>
        }
        {isUserClicked && <UserHeaderBar />}
    </header>
  )
}
