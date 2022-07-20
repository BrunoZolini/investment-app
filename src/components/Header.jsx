import React, { useContext, useEffect, useState } from "react";
import context from "../context/myContext";
import UserHeaderBar from "./UserHeaderBar";

export default function Header() {
  const [isUserClicked, setIsUserClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(context);

  useEffect(() => {
    setLoading(true);
  }, [currentUser]);

  return (
    <header>
      {loading && (
        <button type="button" onClick={() => setIsUserClicked(!isUserClicked)}>
          <div>
            <p>{currentUser.name[0].toUpperCase()}</p>
            <p>{currentUser.name}</p>
          </div>
          <p>
            Seu Saldo R$: {parseFloat(currentUser.accountBalance).toFixed(2)}
          </p>
        </button>
      )}

      {isUserClicked && <UserHeaderBar />}
    </header>
  );
}
