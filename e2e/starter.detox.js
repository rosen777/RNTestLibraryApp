import {setupServer} from 'msw/node';
import {handlers} from '../src/mocks/handlers';
setupServer();
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a name element', async () => {
    await element(by.id('App.username')).typeText('John Doe');
    await element(by.id('App.submit')).tap();
    await expect(element(by.id('App.username.text'))).toHaveText('John Doe');
  });

  it('should have an age element', async () => {
    await element(by.id('App.userage')).typeText('35');
    await element(by.id('App.submit')).tap();
    await expect(element(by.id('App.userage.text'))).toHaveText('35');
  });

  it('should select a country from the dropdown picker list', async () => {
    await element(by.id('App.CountryPicker')).tap();
    await element(by.id('App.CountryPicker')).swipe(
      'down',
      'fast',
      0.2,
      NaN,
      0.1,
    );
    await element(by.text('🇦🇩 +376')).tap({
      x: 0,
      y: 0,
    });
    await element(by.id('App.phone')).tap();
    await element(by.id('App.phone')).typeText('888333666');
    await element(by.id('App.submit')).tap();
    await expect(element(by.id('App.phone.text'))).toHaveText('376888333666');
  });
});
