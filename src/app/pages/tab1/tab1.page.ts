import { Component } from '@angular/core';
import { DeseosService } from 'src/app/servicios/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
lista: any = [];
  constructor(public dservices: DeseosService, private router: Router, public alertController: AlertController) {
    this.lista = this.dservices.listas;
  }
  async aLista() {
  
    const alert = await this.alertController.create({
      header: 'Lista',
      inputs: [{name: 'lista',
                type: 'text',
                placeholder: 'Nombre de la lista'}],
      buttons: [{text: 'Cancelar', role: 'cancel'},
                {text: 'Crear', handler: (data) => {console.log(data);
                                                    if (data.lista.length === 0) {
                                                    return;
                  }
                                                    const listaId = this.dservices.crearLista(data.lista);
                                                    this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
                }}]
    });

    await alert.present();
  }
  onClick(item: Lista) {
    this.router.navigateByUrl(`/tabs/tab1/agregar/${item.id}`);


  }
  }

