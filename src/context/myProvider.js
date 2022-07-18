import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const state = {
    currentUser,
    setCurrentUser,
  }

  return (
    <MyContext.Provider value={ state }>
      {children}
    </MyContext.Provider>
  )
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;