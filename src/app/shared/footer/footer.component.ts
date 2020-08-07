import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../service/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public anio: number = new Date().getFullYear();
  constructor(public _Servicio: InfoPaginaService ) { }

  ngOnInit(): void {
  }

}
