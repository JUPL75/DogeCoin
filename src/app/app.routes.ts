import { Routes } from '@angular/router';

export const routes: Routes = [
        { path: '', redirectTo: 'crypto-dashboard', pathMatch: 'full'},
        { path: 'crypto-dashboard', loadComponent: () => import('./features/crypto-dashboard/crypto-dashboard.component').then(m => m.CryptoDashboardComponent) },
];
