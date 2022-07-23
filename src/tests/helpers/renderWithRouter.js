import { render } from "@testing-library/react";
import React from "react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

export default function renderWithRouter(component) {
  const customHistory = createMemoryHistory();

  const returnFromRender = render(
    <Router history={ customHistory }>
      {component}
    </Router>
  );

  return { history: customHistory, ...returnFromRender };
}