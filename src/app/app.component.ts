import { Component } from '@angular/core';
import { InfoPaginaService } from './service/info-pagina.service';
import { ProductosService } from './service/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _infoPage: InfoPaginaService,
              public _productos: ProductosService){

  }
}
