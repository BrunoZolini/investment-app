import { render } from "@testing-library/react";
import React from "react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import defaultTheme from "../../assets/styles/themes/default";


export default function renderWithRouter(component) {
  const customHistory = createMemoryHistory();

  const returnFromRender = render(
    <ThemeProvider theme={defaultTheme}>
      <Router history={ customHistory }>
        {component}
      </Router>
    </ThemeProvider>
  );

  return { history: customHistory, ...returnFromRender };
}