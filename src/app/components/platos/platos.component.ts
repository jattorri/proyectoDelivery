import { Component, OnInit } from '@angular/core'; 
import { DeliveryService } from 'src/app/servicios/delivery.service'; 
import { ActivatedRoute, Router } from '@angular/router';  
import { Plato } from '../entities/Plato';

@Component({   
  selector: 'app-platos',   
  templateUrl: './platos.component.html',   
  styleUrls: ['./platos.component.css'] }) 

  export class PlatosComponent implements OnInit {  

    preciototal:number;
    plato: Plato;
    cantidad:number=0; 
    precioplato: number=0;

    platosArr:any[] = [];  

  constructor(private servicioDelivery:DeliveryService, 
    private router:Router,
    private activatedRoute:ActivatedRoute) {}
    
  ngOnInit(): void {     
    this.platosArr = this.servicioDelivery.getPlatos();     
    console.log(this.platosArr);}  

  public verPlato(idx:string){ 
    this.router.navigate(['/detallePlato', idx])   
  }

  agregar(idx:string)  {


   
      console.log("Numeroque recivimos del id... " + idx)       
      this.plato = this.servicioDelivery.getPlatoXId(idx)
      this.precioplato= +this.plato?.precio;

      console.log("Informacion Plato ID "+ this.plato?.id)
      console.log("Nombre: "+this.plato?.nombre)
      console.log("Precio: "+this.plato?.precio)


    this.cantidad+=1;
    this.preciototal=this.cantidad*this.precioplato;
    console.log("Cantidad Agregados: " + this.cantidad);
    console.log( "Sumatoria total: "+ this.preciototal);
    this.servicioDelivery.disparadorDePlato.emit({dataPlato:this.plato}) 
    //this.servicioDelivery.disparadorDeResultado.emit({dataResultado: this.preciototal})             
  }

  }