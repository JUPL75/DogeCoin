import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeService } from '../../services/exchange.service';

@Component({
  selector: 'app-best-exchange-platform',
  imports: [CommonModule],
  templateUrl: './best-exchange-platform.component.html',
  styleUrl: './best-exchange-platform.component.scss'
})
export class BestExchangePlatformComponent {
    #exchangeService = inject(ExchangeService);

    protected bestExchangePlatform = this.#exchangeService.bestExchangePlatform;

    constructor() {
      this.#exchangeService.getBestExchangePlatform();
    }
}
