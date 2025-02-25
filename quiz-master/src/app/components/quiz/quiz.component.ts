import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetQuestionsService } from '../../services/get-questions.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule, ResultsComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  categoryIndex: number | null = null;
  selectedCategory: any = null;
  selectedAnsArray: any[] = [];
  myIndex: number = 0;
  selectedOpt: string[] = [];
  quizDone: boolean = false;
  correctAns: number = 0;
  selectedQue: number = 0;
  progressWidth: number = 0;
  visited: boolean[] = [];
  bgColorToAdd: any = {};

  constructor(
    private route: ActivatedRoute,
    private questionService: GetQuestionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryIndex = +params['index']; // Convert to number
      this.loadCategory();
    });
  }

  loadCategory(): void {
    this.questionService.getQuestions().subscribe((data) => {
      this.selectedCategory = data.categories[this.categoryIndex!];
      if (this.selectedCategory?.questions) {
        this.shuffleArray(this.selectedCategory.questions);
        this.visited = new Array(this.selectedCategory.questions.length).fill(
          false
        );
      }
    });
  }

  goPrev() {
    if (this.myIndex > 0) this.myIndex--;
  }

  goNext() {
    if (this.myIndex < this.selectedCategory.questions.length - 1)
      this.myIndex++;
  }

  checkDisable(btn: string): boolean {
    if (btn === 'Prev') return this.myIndex === 0;
    if (btn === 'Next')
      return this.myIndex === this.selectedCategory?.questions.length - 1;
    if (btn === 'submit') return !this.selectedOpt[this.myIndex];
    return false;
  }

  onSubmit() {
    this.selectedQue++;
    this.progressWidth =
      (this.selectedQue / this.selectedCategory?.questions.length) * 100;

    if (this.selectedOpt[this.myIndex]) {
      this.visited[this.myIndex] = true;
      const currentQuestion = this.selectedCategory?.questions[this.myIndex];

      if (!currentQuestion) return;

      currentQuestion.options.forEach((opt: string) => {
        if (opt === currentQuestion.correctAnswer) {
          this.bgColorToAdd[opt] = 'bg-success text-white';
          this.correctAns++;
        } else if (opt === this.selectedOpt[this.myIndex]) {
          this.bgColorToAdd[opt] = 'bg-danger text-white';
        } else {
          this.bgColorToAdd[opt] = '';
        }
      });
    }
  }

  calculateScore() {
    return this.correctAns;
  }

  onSubmitTest() {
    this.quizDone = true;
    const score = this.calculateScore();
    const totalMarks = this.selectedCategory?.questions.length || 0;
    localStorage.setItem('submit', 'true');

    this.router.navigate(['/result'], {
      state: { score, catIndex: this.categoryIndex, total: totalMarks },
      replaceUrl: true,
    });
  }

  onSelect(toNav: number) {
    this.myIndex = toNav;
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
