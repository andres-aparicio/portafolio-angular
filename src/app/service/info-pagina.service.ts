import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPage = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
     this.cargar_info();
     this.cargar_equipo();
  }
  private cargar_info() {

  this.http.get('assets/data/data-page.json')
    .subscribe((resp: InfoPage) => {
        this.cargada = true;
        this.info = resp;
    });
}
  private cargar_equipo() {
    this.http.get('https://angular-html-b023a.firebaseio.com/equipo.json')
    .subscribe((resp: any[]) => {
        this.equipo = resp;
    });
  }
}


