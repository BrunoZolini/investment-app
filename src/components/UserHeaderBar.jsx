import React from 'react'
import { Link } from 'react-router-dom'
export default function UserHeaderBar() {

  return (
    <div>
      <nav>
          <ul>
            <li>
              <Link to="/acoes">
                Ações
              </Link>
            </li>
            <li>
              <Link to="/banco">
                Depósitos/Retiradas
              </Link>
            </li>
            <li>
            <Link 
              to="/"
              onClick={ () => localStorage.setItem('currentUser', JSON.stringify({}))}
              >
              Sair
            </Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
