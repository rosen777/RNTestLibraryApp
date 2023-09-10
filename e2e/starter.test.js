describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a name element', async () => {
    await expect(element(by.id('name'))).toBeVisible();
  });

  it('should have an age element', async () => {
    await expect(element(by.id('age'))).toBeVisible();
  });
});
