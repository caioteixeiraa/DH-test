import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(public http:Http) { }

  API_URL: string = "http://localhost:3000/";

    // read method    
  public get(path) {

    var endpoint = this.API_URL + path;
    return this.http.get(endpoint);

  }

  // create method 
  public post(path:string,body:any) {

      var endpoint = this.API_URL + path;
      return this.http.post(endpoint,body);

  }
  // delete method    
  public delete(path:string){

    var endpoint = this.API_URL + path;
    return this.http.delete(endpoint);

  }  
  // update method    
  public update(path:string, body:any){
    var endpoint = this.API_URL + path;
    return this.http.put(endpoint,body);
  }

  //listagem
  public index(path) {
    var endpoint = this.API_URL + path;
    return this.http.get(endpoint).map(r => r.json());
  }
  
}
