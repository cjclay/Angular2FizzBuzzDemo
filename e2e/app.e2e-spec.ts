import { FizzbuzzPage } from './app.po';

describe('fizzbuzz App', function() {
  let page: FizzbuzzPage;

  beforeEach(() => {
    page = new FizzbuzzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
