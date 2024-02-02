import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import MainContent from './MainContent';

describe('MainContent', () => {
  it('should render a button with correct text', () => {
    render(<MainContent />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Your Button Text'); // Replace with the actual button text
  });

  it('should show the help area after clicking the button', async () => {
    render(<MainContent />);

    const button = screen.getByRole('button');
    fireEvent.click(button); // Use fireEvent instead of userEvent

    expect(await screen.findByTestId('help-area')).toBeInTheDocument();
    expect(screen.getByText('Your Help Area Text')).toBeInTheDocument(); // Replace with the actual help area text
  });
});
