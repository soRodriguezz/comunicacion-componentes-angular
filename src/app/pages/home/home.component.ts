import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombrePadre: string = "Nombre Usuario";

  constructor(
    private dataService: DataService 
  ) { }

  ngOnInit(): void {
  }

  cambiarNombrePadre(): void {
    this.nombrePadre = 'Sebastian';
    this.dataService.nombreUsuario = this.nombrePadre;
  }

  hijoCambioNombre(nuevoNombre: string) {
    this.nombrePadre = nuevoNombre;
    this.dataService.nombreUsuario = nuevoNombre;
  }

}
