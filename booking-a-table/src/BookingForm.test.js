import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders booking form', () => {
  render(<BookingForm />);
  const nameInput = screen.getByLabelText(/name/i);
  expect(nameInput).toBeInTheDocument();
});
