//Servicio de rutas importar componente

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';


const APP_ROUTES: Routes = [
  // ruta con su componente
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'busqueda/:termino', component: BusquedaComponent },
  
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

//IMPORTAMOS LA CONSTANTE EN APP.ROUTES.TS COMO RUTA
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES /*, {useHash: true} */ );
