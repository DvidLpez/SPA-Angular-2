import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  buscarHeroe( termino:string){
    if(termino.length > 0){
      //Redireccion a la busqueda con el termino al hacer click en el boton buscar
      this.router.navigate( ['/busqueda', termino] );
    }
  }

}
