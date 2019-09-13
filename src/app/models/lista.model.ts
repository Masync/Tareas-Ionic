import { ListaItem } from './lista-item.model';

export class Lista {
    id: number;
    title: string;
    creadaEn: Date;
    terminadaEn: Date;
    Termianda: boolean;
    items: ListaItem[];

    constructor(title: string) {
    this.title = title;
    this.creadaEn = new Date();
    this.Termianda = false;
    this.items = [];
    this.id = new Date ().getTime();
    }
}