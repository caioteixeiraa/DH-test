import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente';
import { Pet } from '../pet';
import { ApiService } from 'app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  public cliente : Cliente = new Cliente();
  public pet : Pet = new Pet();

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute) { }

  ngOnInit() {
    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      this.cliente = new Cliente();
      this.pet = new Pet();
    })
  }

  public onSubmit(){
    console.log("Adding a Cliente: " + this.cliente.name);
    
    this.apiService.post("api/v1/clientes/",this.cliente).subscribe((r)=>{
      console.log(r);
      this.cliente = new Cliente();
      alert("Cliente cadastrado !");
      
    });
    
    this.apiService.post("api/v1/pets/",this.pet).subscribe((r)=>{
      console.log(r);
      this.pet = new Pet();
      alert("Pet cadastrado !");
  
      });
  }

}
