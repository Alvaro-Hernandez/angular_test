import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  nombreHeader : string = 'test-dev';
  constructor(private http: HttpClient) { }

  url = "https://restcountries.com/v3.1/alpha/";
  getPais(codPais:string){
    return this.http.get(this.url+codPais);
  }
}
