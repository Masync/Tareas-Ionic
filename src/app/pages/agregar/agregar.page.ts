import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/servicios/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
 public lista: Lista;
 public name = '';
  constructor( public dso: DeseosService, public route: ActivatedRoute) {
    const listaId = this.route.snapshot.paramMap.get('listaId');
    this.lista = this.dso.obtenerLista(listaId);
    // this.dso.cargarStorage();
   }

  ngOnInit() {
  } 

  agregarItem() {
    if (this.name.length === 0) {
      return;
    }
    const newItem =  new ListaItem(this.name);
    this.lista.items.push(newItem);
    this.name = '';
    this.dso.guardarStorage();
  }
  cambioChange(item: ListaItem) {
    console.log(item);
    const pendientes = this.lista.items.filter( data => !data.completado).length;
    console.log(pendientes);

    if (pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.Termianda = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.Termianda = false;
    }
    console.log(this.lista);

    this.dso.guardarStorage();
  }

  unread(i: number) {
    this.lista.items.splice(i, 1);
    this.dso.guardarStorage();
  }
}
