import { Component, OnInit } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  data: IProduit[];

  constructor(private _service: ProduitsService) { }

  ngOnInit() {
     this._service.getProduits().subscribe(
       res => this.data = res
     );
  }

}
