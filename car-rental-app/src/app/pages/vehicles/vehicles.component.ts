import { Component, OnInit } from '@angular/core';
import { GetCarsService } from '../../services/get-cars.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicles',
  imports: [CommonModule],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css',
})
export class VehiclesComponent implements OnInit {
  carList!: any;

  ngOnInit(): void {
    debugger;
    this.getCarSrv.getCars().subscribe((res: any) => {
      this.carList = res.data;
    });
    debugger;
  }
  constructor(private getCarSrv: GetCarsService) {}
}
