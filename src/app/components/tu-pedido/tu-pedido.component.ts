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

  constructor(private activatedRoute:ActivatedRoute,private servicioDelivery:DeliveryService, private router:Router ) { }
  plato?: any [];
  ngOnInit(): void {
      console.log("Andá")
      this.servicioDelivery.disparadorDeAgregacion.subscribe(plato => {
        this.plato=plato
        console.log('Recibiendo this.plato...',plato)   
        for(var i in this.plato)
          { 
          console.log(this.plato[i]);  
          }      
        //this.plato?.push(this.plato)
        //console.log(this.plato?.nombre)
        //console.log(this.plato?.precio)
  })
  
 
}
}
