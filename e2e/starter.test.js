describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have "Your name is" element', async () => {
    await expect(element(by.text('Your name is'))).toBeVisible();
  });

  it('should have "Your age is" element', async () => {
    await expect(element(by.text('Your age is'))).toBeVisible();
  });
});
