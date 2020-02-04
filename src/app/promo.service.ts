import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Promo} from './model/promo';

@Injectable({
  providedIn: 'root'
})
export class PromoService {
  BASE_URL = 'http://localhost:8080/api/promos';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Promo[]> {
    return this.http.get<Promo[]>(`${this.BASE_URL}/all`);
  }

  findByNom(nom: string): Observable<Promo> {
    return this.http.get<Promo>(`${this.BASE_URL}/findById?nom=${nom}`);
  }
}
