import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-buy-ticket',
  imports: [CommonModule, FormsModule],
  templateUrl: './buy-ticket.component.html',
  styleUrl: './buy-ticket.component.scss'
})
export class BuyTicketComponent {
  ticketQuantity = 1;
  euroPerTicket = 4;
  showModal = signal(false);

  private cryptoService = inject(CryptoService);

  constructor() {
    this.cryptoService.getCryptos();
  }

  get dogeRate(): number {
    const cryptos = this.cryptoService.cryptos();
    const doge = cryptos.find(c => c.id === 'dogecoin');
    return doge?.price ?? 0;
  }

  totalPrice() :number {
    const total = this.ticketQuantity * this.euroPerTicket;
    return this.ticketQuantity >= 2 ? total * 0.95 : total;
  }

  totalInDoge(): number {
    const rate = this.dogeRate;
    return rate > 0 ? this.totalPrice() / rate : 0;
  }

  validate(dialog: HTMLDialogElement) {
    dialog.showModal();
  }

  closeModal(dialog: HTMLDialogElement) {
    dialog.close();
  }
}