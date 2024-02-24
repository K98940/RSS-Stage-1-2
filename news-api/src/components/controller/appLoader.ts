import Loader from './loader';

const url: string = process.env.API_URL || '';
const key: string = process.env.API_KEY || '';
if (!url || !key) console.error(`bad url(${url}) or key(${key})`);

class AppLoader extends Loader {
  constructor() {
    super(url, { apiKey: key });
  }
}

export default AppLoader;
