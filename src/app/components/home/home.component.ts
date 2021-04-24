import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buscarPlatos(textoBusqueda:string){     // console.log(textoBusqueda);
    this.router.navigate(['/buscar', textoBusqueda]);    }  

}
