import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  title:string = "Aplicación de heroes SPA";
  subtitle: string = "Angular 2";
  description:string = "Creación de una APP sobre heroes en una sola página";

  constructor() { }

  ngOnInit() {
  }

}
