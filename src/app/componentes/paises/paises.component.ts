import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  datosPais : any;
  constructor(private service:DataService) { }

  ngOnInit(): void {
  }
  cargarPais(codPais:string){
      this.service.getPais(codPais).subscribe( respons => {
        console.table(respons);
        this.datosPais = respons;
      })
  }
}
