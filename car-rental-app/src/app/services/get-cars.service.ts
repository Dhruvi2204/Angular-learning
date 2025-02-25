import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetCarsService {
  constructor(private http: HttpClient) {}
  getCars() {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars'
    );
  }
}
