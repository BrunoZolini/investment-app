import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import SingleStockTable from "../components/SingleStockTable";
import BuyOrSellOperation from "../components/BuyOrSellOperation";
import { mockDB } from "../helpers/mockDB";
import context from "../context/myContext";

export default function BuyAndSellStock({
  match: {
    params: { code },
  },
}) {
  const [stock, setStock] = useState({});
  const { isConfirmed } = useContext(context);

  useEffect(() => {
    const currentStock = mockDB.find((item) => item.code === code);
    setStock(currentStock);
  }, [code]);

  return (
    <div>
      <Header />
      {isConfirmed && <p>Operação realizada com sucesso!</p>}

      <SingleStockTable stock={stock} />
      <BuyOrSellOperation stock={stock} />
    </div>
  );
}

BuyAndSellStock.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    code: PropTypes.string,
  }),
}.isRequired;
