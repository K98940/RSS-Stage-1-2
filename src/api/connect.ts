const BASE_URL = 'ws://127.0.0.1:4000';
const CONNECTION_OK = 1;

interface CallbackRequest {
  (data: unknown): void;
}
type Subscribers = {
  [index: string]: CallbackRequest[];
};

export class Connect {
  private static instance: Connect;

  protected ws: WebSocket | undefined;

  private pendingRequestQueue: unknown[];

  private subscribers: Subscribers;

  private constructor() {
    this.subscribers ??= {};
    this.pendingRequestQueue ??= [];
    this.init();
    if (Connect.instance instanceof Connect) {
      return Connect.instance;
    }
    Connect.instance = this;
  }

  public static getInstance(): Connect {
    if (!Connect.instance) Connect.instance = new Connect();
    return this.instance;
  }

  private init(): void {
    this.ws = new WebSocket(BASE_URL);
    let timerReconnect: NodeJS.Timeout;
    const timeOutReconnect = 2000;

    this.ws.addEventListener('open', () => {
      this.subscribers?.open?.forEach((callback) => callback('ws is opened'));
      clearTimeout(timerReconnect);
    });

    this.ws.addEventListener('error', () => {
      this.ws?.close();
    });

    this.ws.addEventListener('message', (e) => {
      this.getResponse(e);
    });

    this.ws.addEventListener('close', () => {
      this.subscribers?.close?.forEach((callback) => callback('ws is closed'));
      timerReconnect = setTimeout(() => {
        this.init();
      }, timeOutReconnect);
    });
  }

  public request(req: unknown): void {
    try {
      if (this.ws?.readyState !== CONNECTION_OK) {
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
    const timeOut = 2000;
    const timerID = setTimeout(() => {
      if (this.ws?.readyState === CONNECTION_OK) {
        clearTimeout(timerID);
        this.pendingRequestQueue.forEach((request) => {
          this.request(request);
        });
        this.pendingRequestQueue.length = 0;
      } else {
        this.waitConnection();
      }
    }, timeOut);
  }
}
