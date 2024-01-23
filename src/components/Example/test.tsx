import { screen } from '@testing-library/react';
import { Example } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Heading />', () => {
  it('should render a heading', () => {
    renderTheme(<Example>Example</Example>);
    const heading = screen.getByRole('heading', { name: 'Example' });
    expect(heading).toBeInTheDocument();
  });
});
