import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  public listas: Lista [] = [];
  constructor() {
    this.cargarStorage();
    // const lista1 = new Lista('Supermercado');
    // const lista2 = new Lista('Trabajos');

    // this.listas.push(lista1, lista2);
   }
   crearLista(titulo: string) {
    const nueaLista = new Lista(titulo);
    this.listas.push(nueaLista);
    this.guardarStorage();

    return nueaLista.id;
  }

  obtenerLista(id: string | number) {
    id = Number(id);

    return this.listas.find( listaData => listaData.id === id);
  }
  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }
  cargarStorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    // } else {
    //   this.listas = [];
    // }

  }

}

}