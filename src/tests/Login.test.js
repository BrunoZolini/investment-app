import React from "react";
import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import renderWithRouter from './helpers/renderWithRouter'

describe('Testing the Login page', () => {
  it('1 - Have a logo image', () => {
    renderWithRouter(<Login />)
    const imgLogo  = screen.getByRole('img');
    expect(imgLogo).toBeInTheDocument();
  })
  it('2 - Have a email input', () => {
    renderWithRouter(<Login />)
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
  })
  it('3 - Have a password input', () => {
    renderWithRouter(<Login />)
    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
  })
  it('4 - Have a submit button', () => {
    renderWithRouter(<Login />)
    const submitButton = screen.getByRole('button', {name: 'Entrar', type: 'submit'});
    expect(submitButton).toBeInTheDocument();
  })
  it('5 - Have a registration link', () => {
    renderWithRouter(<Login />)
    const registrationLink = screen.getByRole('link', {name: 'Cadastrar'});
    expect(registrationLink).toBeInTheDocument();
  })
  it('6 - Error message', async () => {
    renderWithRouter(<Login />)
    const submitButton = screen.getByRole('button', {name: 'Entrar', type: 'submit'});
    userEvent.click(submitButton);
    const errorMessage = await screen.findByText('Email ou senha inválidos');
    expect(errorMessage).toBeInTheDocument();
  })
})