import { getHeaderTitle } from '../support/app.po';

describe('burger-buddy', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the app name in the header', () => {
    getHeaderTitle().contains('Burger Buddy');
  });
});
