import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Producto } from '../interface/producto';

@Component({
  selector: 'app-sin-estado',
  templateUrl: './sin-estado.component.html',
  styleUrls: ['./sin-estado.component.scss']
})
export class SinEstadoComponent implements OnInit {

  public accionComprar: string='';
  public disable: boolean= false;

  @Input()
  producto!: Producto;

  @Output()
  productoSelecionado: EventEmitter<Producto> = new EventEmitter()

  constructor() {}

  ngOnInit() {
    this.accionComprar = 'COMPRAR POR $ ' + this.producto.precio;
  }

  seleccionarItem(){
    this.disable = true;
    this.accionComprar = "AÑADIDO AL CARRO";
    this.productoSelecionado.emit(this.producto);
  }

  deshabilitarBoton(){
    return !!this.disable;
  }

}
