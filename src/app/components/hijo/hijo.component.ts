import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input('nombreExtrano') nombreHijo: string = 'Sin nombre';
  @Output('cambioNombre') cambioNombreHijo = new EventEmitter<string>();

  constructor( 
    // private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  cambiarNombreComponent() {
    this.nombreHijo = 'Sebastian RODRIGUEZ ZAPATA';
    this.cambioNombreHijo.emit(this.nombreHijo);
    // this.dataService.nombreUsuario = this.nombreHijo;
  }

}
