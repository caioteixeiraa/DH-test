import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { CadastroWalkerComponent } from './components/cadastro-walker/cadastro-walker.component';
import { WalkersListComponent } from './components/walkers-list/walkers-list.component';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cadastro-cliente', component: CadastroClienteComponent },
    { path: 'cadastro-walker', component: CadastroWalkerComponent },
    { path: 'listagem-passeadores', component: WalkersListComponent },
    { path: 'listagem-clientes', component: ClientesListComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);