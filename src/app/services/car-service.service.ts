import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../interfaces/car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl: string;
  httpOptions: any;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://epico.gob.ec/vehiculo/public/api';
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
  }

  getListCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl + '/vehiculos/').pipe(
      map((resp: any) => resp.data)
    );
  }
}