import { render, screen } from '@food/utils/test';

import Typography from './typography';

const children = 'children';

describe('<Typography />', () => {
  describe('children', () => {
    it('should render out the children inside the component', () => {
      render(<Typography>{children}</Typography>);

      const component = screen.getByText(children);

      expect(component.textContent).toEqual(children);
    });
  });

  describe('variant', () => {
    it('should render the component as a h1, if specified', () => {
      const { container } = render(<Typography variant="h1">{children}</Typography>);

      const h1 = container.querySelector('h1');

      expect(h1).toBeDefined();
    });

    it('should render the component as a h2, if specified', () => {
      const { container } = render(<Typography variant="h2">{children}</Typography>);

      const h2 = container.querySelector('h2');

      expect(h2).toBeDefined();
    });

    it('should render the component as a p, if variant is set to text', () => {
      const { container } = render(<Typography variant="text">{children}</Typography>);

      const p = container.querySelector('p');

      expect(p).toBeDefined();
    });
  });
});
