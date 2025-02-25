import { Component } from '@angular/core';
import { BackendService } from '../../service/backend.service';
import { LoggerService } from '../../service/logger.service';

@Component({
  selector: 'app-nested-service-example',
  imports: [],
  templateUrl: './nested-service-example.component.html',
  styleUrl: './nested-service-example.component.css',
})
export class NestedServiceExampleComponent {
  constructor(private backend: BackendService, private logger: LoggerService) {
    debugger;
    console.log('In nested service component');
  }

  cars: any[] = [];

  getCars() {
    // Fetch
    debugger;
    this.cars = this.backend.getAllCars();
    console.log(this.cars);
    debugger;
    this.logger.log(`Fetched ${this.cars.length} cars.`);
  }
}
