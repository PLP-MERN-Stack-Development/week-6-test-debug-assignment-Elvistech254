import { render, screen } from '@testing-library/react';
import App from '../../App';

test('full integration example', () => {
  render(<App />);
  expect(screen.queryByText('Non-existing')).toBeNull();
});
