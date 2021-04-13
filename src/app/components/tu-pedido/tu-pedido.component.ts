import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { ActivatedRoute } from '@angular/router';

import { Plato } from '../entities/Plato';


@Component({
  selector: 'app-tu-pedido',
  templateUrl: './tu-pedido.component.html',
  styleUrls: ['./tu-pedido.component.css']
})

export class TuPedidoComponent implements OnInit {
  
  arrPlato: Array<any>= [];
  platoAux : Plato;
  precio: number;
  precioTotal: number;


  constructor(private activatedRoute:ActivatedRoute,
    private servicioDelivery:DeliveryService,
    private router:Router ) { }

 
  ngOnInit(): void {
      this.servicioDelivery.disparadorDeAgregacion.subscribe(plato  => {
      this.arrPlato.push(plato);
      console.log('Recibiendo this.plato...', plato)
      this.arrPlato.forEach(p =>{ 
      this.platoAux.precio = p.precio
      this.precioTotal = +this.platoAux.precio + this.precioTotal
      })
  }); 
}



}
