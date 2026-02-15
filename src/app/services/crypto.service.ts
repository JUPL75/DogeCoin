import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs';

interface Crypto {
  id: string;
  price: number;
  change24h: number;
}

type CoinGeckoResponse = Record<
  string,
  {
    eur: number;
    eur_24h_change: number;
  }
>;

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  #cryptos = signal<Crypto[]>([]);
  
  #httpClient = inject(HttpClient);

  get cryptos() {
    return this.#cryptos;
  }

  getCryptos() {
    return this.#httpClient.get<CoinGeckoResponse>('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=eur&include_24hr_change=true').pipe(map(data =>
       Object.entries(data).map(([id, data]) => ({
          id,
          price: data.eur,
          change24h: data.eur_24h_change
        }))
      )
    ).subscribe((data) => {
      this.#cryptos.set(data);
    }); 
  }
}
