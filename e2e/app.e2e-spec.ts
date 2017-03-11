import { GideonLabsNg4Page } from './app.po';

describe('gideon-labs-ng4 App', () => {
  let page: GideonLabsNg4Page;

  beforeEach(() => {
    page = new GideonLabsNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
