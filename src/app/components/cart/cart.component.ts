import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { Plato } from '../entities/Plato';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  arrPlato: Array<any>= [];
  platoAux : Plato;
  precioTotal: number=0;
  precioPlato: number=0;
  nombrePlato:string="";


  constructor(private activatedRoute:ActivatedRoute,
    private servicioDelivery:DeliveryService,
    private router:Router) {}

 
  ngOnInit(): void {
      this.servicioDelivery.disparadorDePlato.subscribe(plato  => {
      this.arrPlato.push(plato);
      console.log('Recibiendo this.plato...', plato)
      this.precioTotal += plato.dataPlato.precio;
      this.precioPlato = plato.dataPlato.precio;
      this.nombrePlato = plato.dataPlato.nombre;
      console.log('Precio Total', this.precioTotal)
  }); 
  }

  checkout(): void{
    this.router.navigate(['/login'])
  }
}
