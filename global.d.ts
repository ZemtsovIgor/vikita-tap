import { WebApp } from './src/types/twa-types';

declare global {
  interface Window {
    Telegram?: {
      WebApp: WebApp;
    };
  }
}
