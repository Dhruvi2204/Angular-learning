import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor() {
    console.log('Backed service initialized');
  }

  carList: any[] = [
    {
      carId: 1987,
      brand: 'Hyundai',
      model: 'CRETA',
    },
    {
      carId: 1988,
      brand: 'BMW',
      model: 'X5',
    },
    {
      carId: 1989,
      brand: 'Mercedes Benz',
      model: 'X6',
    },
  ];
  getAllCars() {
    debugger;
    return this.carList;
  }
}
