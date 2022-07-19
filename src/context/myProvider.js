import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [willBuy, setWillBuy] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const state = {
    willBuy,
    setWillBuy,
    isConfirmed,
    setIsConfirmed,
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