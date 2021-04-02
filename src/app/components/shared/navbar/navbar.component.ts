import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';  
import { DeliveryService } from 'src/app/servicios/delivery.service';
@Component({   
  selector: 'app-navbar',   
  templateUrl: './navbar.component.html',   
  styleUrls: ['./navbar.component.css'] }) export class NavbarComponent implements OnInit {  
  constructor(private router:Router, private servicioDelivery: DeliveryService) { }  
  ngOnInit(): void {   }  
  buscarPlatos(textoBusqueda:string){     // console.log(textoBusqueda);
         this.router.navigate(['/buscar', textoBusqueda]);    }  
} 