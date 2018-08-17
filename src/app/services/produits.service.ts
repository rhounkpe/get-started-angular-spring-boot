import { Injectable } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

    URL = 'http://localhost:8080/produits/';

  constructor(private _http: HttpClient) { }

  getProduitById(id: string): Observable<IProduit> {
    return this._http.get<IProduit>(this.URL + id);

  }

  getProduits(): Observable<IProduit[]> {
       return  this._http.get<IProduit[]>(this.URL);
  }
}
