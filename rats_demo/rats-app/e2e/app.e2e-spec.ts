import { RatsAppPage } from './app.po';

describe('rats-app App', () => {
  let page: RatsAppPage;

  beforeEach(() => {
    page = new RatsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
