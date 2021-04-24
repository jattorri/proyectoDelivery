import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './components/home/home.component'; 
import { AboutComponent } from './components/about/about.component'; 
import { PlatosComponent } from './components/platos/platos.component';  
import { DetallePlatoComponent } from './components/detalle-plato/detalle-plato.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { TuPedidoComponent } from './components/tu-pedido/tu-pedido.component';
import { EnviadoComponent } from './components/enviado/enviado.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [   { path: 'home', component: HomeComponent },      
{ path: 'about', component: AboutComponent },     
{ path: 'platos', component: PlatosComponent }, 
{ path: 'detallePlato/:id', component: DetallePlatoComponent},
{ path: 'buscar/:termino', component: BuscadorComponent },
{ path: 'tu-pedido', component: TuPedidoComponent },
{ path: 'enviado', component: EnviadoComponent},
{ path: 'login', component:LoginComponent},        
{ path: '**', pathMatch: 'full', redirectTo: 'home' }  
];
 

@NgModule({   
  imports: [RouterModule.forRoot(routes)],   
  exports: [RouterModule] }) 
  export class AppRoutingModule { } 