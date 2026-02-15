import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

interface Exchange {
  id: string;
  name: string;
  description: string;
  url: string;
  trade_volume_24h_btc: number;
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  #httpClient = inject(HttpClient);
  #bestExchangePlatform = signal<Exchange | null>(null);

  get bestExchangePlatform() {
    return this.#bestExchangePlatform;
  }

  getBestExchangePlatform() {
    this.#httpClient
      .get<Exchange[]>('https://api.coingecko.com/api/v3/exchanges')
      .subscribe(data => {
        const bestPlatform = data.sort(
          (a, b) => b.trade_volume_24h_btc - a.trade_volume_24h_btc
        )[0];
        this.#bestExchangePlatform.set(bestPlatform);
      });
  }
}
