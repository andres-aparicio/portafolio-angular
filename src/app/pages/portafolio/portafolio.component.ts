import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public productoservie: ProductosService) { }

  ngOnInit(): void {
  }

}
