import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tu-pedido',
  templateUrl: './tu-pedido.component.html',
  styleUrls: ['./tu-pedido.component.css']
})

export class TuPedidoComponent implements OnInit {
  
  arrPlato: Array<any>= [];

  constructor(private activatedRoute:ActivatedRoute,
    private servicioDelivery:DeliveryService,
    private router:Router ) { }

 
  ngOnInit(): void {
      this.servicioDelivery.disparadorDeAgregacion.subscribe(plato  => {
      this.arrPlato.push(plato);
      console.log('Recibiendo this.plato...', plato)   
  }); 
}

}
