import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from '../../../service/api-service.service';
import { TabGroupComponent } from '../../reusable/tab-group/tab-group.component';

// https://freeapi.miniprojectideas.com/index.html --->

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, TabGroupComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
  // providers: [ApiServiceService],
})
export class PostApiComponent {
  //! we can use constructor to create instance of http client or using inject we can create instance. this was introduced from angular 16.

  // The result we get by calling get metod is stored here
  carList: any[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllCars();
  }

  currentTab: string = '';
  onTabClick(tab: string) {
    this.currentTab = tab;
  }

  // ? Dependency injection:In Angular, dependency injection makes services available to components.

  constructor(private apiService: ApiServiceService) {}
  // apiService = inject(ApiServiceService);
  // * Basically an object is created of the service.

  // !
  // carObj binding done with the form
  carObj: any = {
    carId: 0,
    brand: '',
    model: '',
    year: '',
    color: '',
    dailyRate: '',
    carImage: '',
    regNo: '',
  };

  // getAllCars() {
  //   this.http
  //     .get('https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars')
  //     .subscribe((result: any) => {
  //       this.carList = result.data;
  //     });
  // }
  // !An Observable emits data over time (e.g., an API response, user input, or events), and subscribing ensures that you get notified whenever new data is available.

  //& USING SERVICE:
  getAllCars() {
    this.apiService.getAllCars().subscribe((res: any) => {
      this.carList = res.data;
    });
  }

  // & POST API SIMPLE
  // onSave() {
  //   this.http
  //     .post(
  //       'https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar',
  //       this.carObj
  //     )
  //     .subscribe((res: any) => {
  //       if (res.result) {
  //         alert('Car Added Successfully');
  //         this.getAllCars();
  //       } else {
  //         alert(res.message);\
  //       }
  //     });
  // }

  // * POST API USING SERVICE
  onSave() {
    // carObj is binded with form
    this.apiService.addNewCar(this.carObj).subscribe((res: any) => {
      if (res.result) {
        alert('Car Added Successfully');
        this.getAllCars();
        this.onReset();
      } else {
        alert(res.message);
      }
    });
  }

  // & POST API WITH SERVICE

  onReset() {
    this.carObj = '';
  }

  onEdit(car: any) {
    this.carObj = car;
    // The values in table will be shown in the form where it could be edited.
    this.currentTab = 'Add new Car';
  }
  onUpdate() {
    this.http
      .put(
        'https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar',
        this.carObj
      )
      .subscribe(() => {
        alert('Car updated successfully');
        this.onReset();
      });

    // .subscribe((res: any) => {
    //   if (res.Result == true) {
    //     alert('Car updated successfully');
    //   } else {
    //     alert(res.Message);
    //   }
    // });
  }

  onDelete(id: any) {
    // We cannot delete directly what if user clicked mistakely on delete button so confirm .
    const isDelete = confirm('Are your sure you want to delete this car data?');
    if (isDelete) {
      this.http
        .delete(
          'https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=' +
            id
        )
        .subscribe((res: any) => {
          if (res.result) {
            alert('Car deleted successfully');
            this.getAllCars();
          } else {
            alert(res.message);
          }
        });
    }
  }
}
