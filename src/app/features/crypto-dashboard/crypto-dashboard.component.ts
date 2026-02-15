import { Component, inject, effect } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { CommonModule } from '@angular/common';

interface Crypto {
  id: string;
  name: string;
  price: number;
  change24h: number;
}

@Component({
  selector: 'app-crypto-dasboard',
 imports: [CommonModule],
  templateUrl: './crypto-dashboard.component.html',
  styleUrl: './crypto-dashboard.component.scss'
})
export class CryptoDashboardComponent {
  #cryptoService = inject(CryptoService);

  cryptos = this.#cryptoService.cryptos;

  constructor() {
    this.#cryptoService.getCryptos();
  
    effect(() => {
      console.log('Cryptos updated:', this.cryptos());
    });
  }
}
