import { Connect } from '../connect';

describe('Websocket', () => {
  const connect = new Connect();

  it('connect.status is "open"', () => {
    setTimeout(() => {
      expect(connect.status).toBe('open');
    }, 1000);
  });

  it('connect.status is "open"', () => {
    setTimeout(() => {
      expect(connect.status).toBe('open');
    }, 1000);
  });
});
