import { Component, Input, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router'; 
import { DeliveryService } from 'src/app/servicios/delivery.service';  
import { Plato } from '../entities/Plato';


@Component({   
  selector: 'app-detalle-plato',   
  templateUrl: './detalle-plato.component.html',   
  styleUrls: ['./detalle-plato.component.css'] 
}) 
  
  
  export class DetallePlatoComponent implements OnInit {  

  preciototal:number;

  plato: Plato;
  cantidad:number=0; 
  precioplato: number=0;
  
  constructor(private activatedRoute:ActivatedRoute, private servicioDelibery:DeliveryService) {  
      }  

    ngOnInit(): void { 

        this.activatedRoute.params.subscribe(params =>{
        console.log("Numeroque recivimos dl URL:" + params['id'])       
        this.plato = this.servicioDelibery.getPlatoXId(params['id'])})
        this.precioplato= +this.plato?.precio;

        console.log("Informacion Plato ID "+ this.plato?.id)
        console.log("Nombre: "+this.plato?.nombre)
        console.log("Precio: "+this.plato?.precio)
      } 
    
    agregar()  {
      this.cantidad+=1;
      this.preciototal=this.cantidad*this.precioplato;
      console.log("Cantidad Agregados: " + this.cantidad);
      console.log( "Sumatoria total: "+ this.preciototal);
      this.servicioDelibery.disparadorDePlato.emit({dataPlato:this.plato})              
    }
  
  } 