import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css']
})
export class ComunicacionComponent implements OnInit {
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  cambiarNombre(nombre:string){
    this.dataService.nombreHeader=nombre;
  }
}
