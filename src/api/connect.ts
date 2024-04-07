const BASE_URL = 'ws://127.0.0.1:4000';

type Status = 'open' | 'closed' | 'error';
interface CallbackRequest {
  (data: unknown): void;
}
type Subscribers = {
  [index: string]: CallbackRequest[];
};

export class Connect {
  static instance: undefined | Connect;

  public status: Status;

  protected ws: WebSocket;

  private pendingRequestQueue: unknown[];

  private subscribers: Subscribers;

  constructor(url?: string) {
    this.subscribers ??= {};
    this.status ??= 'closed';
    this.pendingRequestQueue ??= [];
    this.ws ??= new WebSocket(url || BASE_URL);
    this.init();
    if (Connect.instance instanceof Connect) {
      return Connect.instance;
    }
    Connect.instance = this;
  }

  private init(): void {
    let timerReconnect: NodeJS.Timeout;
    let timeOutReconnect = 500;

    this.ws.addEventListener('open', () => {
      this.status = 'open';
      clearTimeout(timerReconnect);
      timeOutReconnect = 500;
    });

    this.ws.addEventListener('error', () => {
      this.status = 'error';
      this.ws.close();
    });

    this.ws.addEventListener('message', (e) => {
      this.getResponse(e);
    });

    this.ws.addEventListener('close', () => {
      this.status = 'closed';
      timerReconnect = setTimeout(() => {
        this.init();
        timeOutReconnect = timeOutReconnect > 60000 ? 500 : timeOutReconnect * 2;
      }, timeOutReconnect);
    });
  }

  public request(req: unknown): void {
    try {
      if (this.status !== 'open') {
        this.pendingRequestQueue.push(req);
        this.waitConnection();
        return;
      }
      const query = JSON.stringify(req);
      this.ws?.send(query);
    } catch (error) {
      console.error(error);
    }
  }

  private getResponse(e: MessageEvent): void {
    try {
      const data = JSON.parse(e.data);
      if ('type' in data) {
        if (this.subscribers[data.type]) this.subscribers[data.type].forEach((callback) => callback(data));
      }
    } catch (error) {
      console.error(error);
    }
  }

  public subscribe(event: string, calback: CallbackRequest) {
    if (!this.subscribers.hasOwnProperty(event)) this.subscribers[event] = [];
    this.subscribers[event].push(calback);
  }

  private waitConnection(): void {
    let timeOut = 500;
    const timerID = setTimeout(() => {
      if (this.status === 'open') {
        clearTimeout(timerID);
        timeOut = 1000;
        this.pendingRequestQueue.forEach((request) => {
          this.request(request);
        });
        this.pendingRequestQueue.length = 0;
      } else {
        timeOut = timeOut < 32000 ? timeOut * 2 : 32000;
        this.waitConnection();
      }
    }, timeOut);
  }
}
