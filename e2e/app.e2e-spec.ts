import { YtClientWebPage } from './app.po';

describe('yt-client-web App', function() {
  let page: YtClientWebPage;

  beforeEach(() => {
    page = new YtClientWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
