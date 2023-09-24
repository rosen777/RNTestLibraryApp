import {setupServer} from 'msw/node';
import {handlers} from './handlers';
// This configures a Service Worker with the given request handlers.
export const server = setupServer(...handlers);

export const setupTestAppServer = () => {
  beforeAll(() => {
    server.listen({
      onUnhandledRequest(req) {
        console.error(
          'Found an unhandled %s request to %s',
          req.method,
          req.url.href,
        );
      },
    });
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());
};
