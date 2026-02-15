import { Component, inject } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { CommonModule } from '@angular/common';

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
  }
}
