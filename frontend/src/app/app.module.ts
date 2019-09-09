import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from '../app/components/home/home.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { CadastroWalkerComponent } from './components/cadastro-walker/cadastro-walker.component';
import { ApiService } from './api.service';
import { WalkersListComponent } from './components/walkers-list/walkers-list.component';
import { routing } from './app.routing';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroClienteComponent,
    CadastroWalkerComponent,
    WalkersListComponent,
    ClientesListComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
