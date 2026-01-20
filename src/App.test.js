import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders UK Weather Finder heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/UK Weather Finder/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders search input', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Enter a UK city name/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('renders Get Weather button', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Get Weather/i);
    expect(buttonElement).toBeInTheDocument();
  });
});