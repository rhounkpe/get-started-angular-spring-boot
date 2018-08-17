import { Component, OnInit } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  produit: IProduit;

  code: String;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.code = this._route.snapshot.paramMap.get('id');
  }

}
