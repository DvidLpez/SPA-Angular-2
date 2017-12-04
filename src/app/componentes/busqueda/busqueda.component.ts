import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  termino:string;
  resultados:Heroe[] = [];

  constructor( private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService
   ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
    this.termino = params['termino'];
    this.resultados = this._heroesService.buscarHeroes(params['termino']) ;
    });
  }

}
