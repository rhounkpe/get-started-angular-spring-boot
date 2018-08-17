import { Injectable } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

    url = 'http://localhost:8080/produits/';

  constructor(private _http: HttpClient) { }

  getProduitById(id: string): IProduit {
    return {
      code: 'BIDON from service',
      titre: 'Titre bidon',
      prixUnitaire: 123.56
    };
  }

  getProduits(): Observable<IProduit[]> {
       return  this._http.get<IProduit[]>(this.url);
  }
}
