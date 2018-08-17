import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Subscription } from '../../../node_modules/rxjs';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
 
  produit: IProduit = {code: 'Bidon', titre: 'Bidon', prixUnitaire: 123.45};

  subscription: Subscription;
  code: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _service: ProduitsService) { }

  ngOnInit() {
    this.subscription =this._route.paramMap.subscribe(
      res => {
        this.code = res.get('id');
        this.produit = this._service.getProduitById(this.code);
      }
    );
    // this.code = this._route.snapshot.paramMap.get('id');
  }

  navigateToList() {
    this._router.navigate(['/list']); // Navigation programmatique
  }

 
}
