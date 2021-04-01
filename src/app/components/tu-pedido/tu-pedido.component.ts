import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { DetallePlatoComponent } from '../detalle-plato/detalle-plato.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  providers: [DetallePlatoComponent],
  selector: 'app-tu-pedido',
  templateUrl: './tu-pedido.component.html',
  styleUrls: ['./tu-pedido.component.css']
})
export class TuPedidoComponent implements OnInit {
plato: any;
  constructor(private activatedRoute:ActivatedRoute,private servicioDelivery:DeliveryService, private router:Router,private comp: DetallePlatoComponent ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>
      {console.log(params['id'])       
      this.plato = this.servicioDelivery.getPlatoXId(params['id'])  })


  }
  
  public agregacion(): void {

    

    this.comp.agregar();
    
  }
  
}
