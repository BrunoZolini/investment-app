import React from "react";
import { screen } from "@testing-library/react";
import Login from '../pages/Login';
import renderWithRouter from './helpers/renderWithRouter'

describe('Testing the login page', () => {
  it('1 - Have a logo image', () => {
    renderWithRouter(<Login />)
    const imgLogo  = screen.getByRole('img');
    expect(imgLogo).toBeInTheDocument();
  })
})