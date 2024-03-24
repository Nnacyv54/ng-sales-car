import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car-service.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrl: './list-car.component.css'
})
export class ListCarComponent implements OnInit{

  title = 'Lista de autos';
  cars: any[] = [];

  constructor(private carService: CarService) { }

  async ngOnInit(): Promise<void> {
    // llamando ovservables
    // this.carService.getCars().subscribe((data) => {
    //   this.cars = data;
    // });
    // con el await es mucho mejor manejar apis
    this.cars = await this.carService.getCarsPromise();
    console.log(this.cars);
  }

  starsArray(num: number): any[] {
    let star = Array(num).fill(0);
    return star;
  }

  showDetail(car: any) {
    console.log(car);
  }
}