import { FlatratePage } from './app.po';

describe('flatrate App', function() {
  let page: FlatratePage;

  beforeEach(() => {
    page = new FlatratePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
