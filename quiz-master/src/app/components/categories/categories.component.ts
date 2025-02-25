import { Component, OnInit } from '@angular/core';
import { GetQuestionsService } from '../../services/get-questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  questionsObj: any;

  constructor(
    private getDataSrv: GetQuestionsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getDataSrv.getQuestions().subscribe((res: any) => {
      this.questionsObj = res.categories;
      // console.log(this.questionsObj);
    });
  }

  onTakeQuiz(i: number) {
    // console.log(this.questionsObj[i]);
    this.router.navigate(['/quiz', i]);
  }
}
