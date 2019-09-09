import { Component, OnInit } from '@angular/core';

import { Walker } from '../walker';
import { ApiService } from 'app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-walker',
  templateUrl: './cadastro-walker.component.html',
  styleUrls: ['./cadastro-walker.component.css']
})
export class CadastroWalkerComponent implements OnInit {
  
  public walker : Walker = new Walker();
  
  constructor(public apiService: ApiService , public acRoute : ActivatedRoute) {
  }

  ngOnInit() {
    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      this.walker = new Walker();
    })
  }

  public onSubmit(){
    console.log("Adding a Walker: " + this.walker.name);
    
    this.apiService.post("api/v1/walkers/",this.walker).subscribe((r)=>{
    console.log(r);
    this.walker = new Walker();
    alert("Passeador cadastrado !");

    });
  }

}
