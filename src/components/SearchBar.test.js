import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  test('renders search input and button', () => {
    render(<SearchBar onSearch={() => {}} isLoading={false} />);
    
    const input = screen.getByPlaceholderText(/Enter a UK city name/i);
    const button = screen.getByText(/Get Weather/i);
    
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('calls onSearch with city name when form is submitted', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} isLoading={false} />);
    
    const input = screen.getByPlaceholderText(/Enter a UK city name/i);
    const button = screen.getByText(/Get Weather/i);
    
    fireEvent.change(input, { target: { value: 'London' } });
    fireEvent.click(button);
    
    expect(mockOnSearch).toHaveBeenCalledWith('London');
  });

  test('disables button when loading', () => {
    render(<SearchBar onSearch={() => {}} isLoading={true} />);
    
    const button = screen.getByText(/Loading.../i);
    expect(button).toBeDisabled();
  });

  test('does not submit empty city name', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} isLoading={false} />);
    
    const button = screen.getByText(/Get Weather/i);
    fireEvent.click(button);
    
    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});