// Import necessary modules for testing
import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './Components/Home';



test('renders_welcome_message', () => {
  const { getByText } = render(<HomePage />);
  const welcomeMessage = getByText(/Welcome to IamNeo/i);
  expect(welcomeMessage).toBeInTheDocument();
});

