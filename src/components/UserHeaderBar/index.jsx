import React, { useContext } from "react";
import { Link } from "react-router-dom";
import context from "../../context/myContext";
export default function UserHeaderBar() {
  const {setCurrentUser} = useContext(context);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/acoes">Ações</Link>
          </li>
          <li>
            <Link to="/banco">Depósitos/Retiradas</Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {                
                localStorage.setItem("currentUser", JSON.stringify({}))
                setCurrentUser({})
              }
              }
            >
              Sair
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
