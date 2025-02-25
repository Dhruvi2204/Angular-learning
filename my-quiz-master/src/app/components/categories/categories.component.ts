import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginRegisterComponent } from '../login-register/login-register.component';

@Component({
  selector: 'app-categories',
  imports: [NavbarComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  questionsObj: any;

  constructor(private getDataSrv: GetDataService, private router: Router) {}
  ngOnInit(): void {
    this.getDataSrv.getData().subscribe((res: any) => {
      this.questionsObj = res.categories;
      // console.log(this.questionsObj);
    });
  }

  onTakeQuiz(i: number) {
    // console.log(this.questionsObj[i]);
    this.router.navigate(['/quiz', i]);
  }
}
