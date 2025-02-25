import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// * @Injectable is a decorator in Angular that marks a class as available for dependency injection (DI).
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  // instance of httpCLient created.
  constructor(private http: HttpClient) {}
  // ! variable created for common part of api calling
  apiURL: string = 'https://freeapi.miniprojectideas.com/api/CarRentalApp/';

  getAllCars() {
    return this.http.get(this.apiURL + 'GetCars');
  }

  addNewCar(carObj: any) {
    return this.http.post(`${this.apiURL}CreateNewCar`, carObj);
  }
}
