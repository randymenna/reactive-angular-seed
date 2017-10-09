import { AppPage } from './app.po';

describe('angular-redux-starter App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Reactive Angular Seed');
  });
});
