import { Component, OnInit } from '@angular/core';
import { Producto } from '../interface/producto';
import { TiendaModel } from '../models/tienda-model';

@Component({
  selector: 'app-con-estado',
  templateUrl: './con-estado.component.html',
  styleUrls: ['./con-estado.component.scss']
})
export class ConEstadoComponent implements OnInit {
  modeloTienda: TiendaModel = new TiendaModel();
  itemsComprados: Array<Producto> = [];


  constructor() {

   }

  ngOnInit(): void {
  }

  Seleccionar(item: Producto): void {
    this.itemsComprados.push(item);
  }

  productoS(_evento: any){
    console.log(_evento);
  }

}
