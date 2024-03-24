import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', anio: 2022, color: 'Azul', kilometros: 25000, precio: 25000, estrellas: 2 },
    { id: 2, marca: 'Honda', modelo: 'Civic', anio: 2021, color: 'Rojo', kilometros: 200, precio: 22000, estrellas: 3 },
    { id: 3, marca: 'Ford', modelo: 'Focus', anio: 2020, color: 'Blanco', kilometros: 2500, precio: 20000, estrellas: 5 }
  ];

  constructor() { }

  // basado en observable
  getCars(): Observable<any[]> {
    return of(this.cars);
  }

  // basado en promesa
  getCarsPromise(): Promise<any[]> {
    return Promise.resolve(this.cars);
  }
}