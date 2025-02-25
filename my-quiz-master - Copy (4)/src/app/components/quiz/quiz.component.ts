import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { GetQuestionsService } from '../../../../../quiz-master/src/app/services/get-questions.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from '../results/results.component';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  results!: any;
  myIndex: number = 0;
  quesObj: any;
  selectedCategoryQuestions: any;
  currentQueIndex: number = 0;
  selectedOptions: { [key: number]: string } = {};
  submittedAnswers: { [key: number]: string } = {};
  submitEnabled: { [key: number]: boolean } = {};

  constructor(
    private getQueSrv: GetQuestionsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private quizService: QuizService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.myIndex = +params['myIndex'];
    });
    this.loadQuestions();
    // First, try to get the results from the navigation state.
    if (history.state && history.state.score !== undefined) {
      this.results = history.state;
    } else {
      // If not available (like on a refresh), get the stored results from the service or localStorage.
      this.results = this.quizService.getQuizResults();
    }
  }

  loadQuestions() {
    this.getQueSrv.getQuestions().subscribe((res: any) => {
      this.quesObj = res.categories;
      this.selectedCategoryQuestions = this.quesObj[this.myIndex].questions;
      this.shuffleQuestions(); // Shuffle the questions array
      this.initializeSubmitState();
    });
  }

  // Fisher-Yates Shuffle Algorithm
  shuffleQuestions() {
    for (let i = this.selectedCategoryQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.selectedCategoryQuestions[i], this.selectedCategoryQuestions[j]] = [
        this.selectedCategoryQuestions[j],
        this.selectedCategoryQuestions[i],
      ];
    }
  }

  initializeSubmitState() {
    this.submitEnabled = {};
    for (let i = 0; i < this.selectedCategoryQuestions.length; i++) {
      this.submitEnabled[i] = false;
    }
  }

  enableSubmit(index: number) {
    if (this.selectedOptions[index]) {
      this.submitEnabled[index] = true;
    }
  }

  onSubmit(index: number) {
    if (this.selectedOptions[index]) {
      this.submittedAnswers[index] = this.selectedOptions[index];
      this.submitEnabled[index] = false; // Disable submit button after submission
    }
  }

  goPrev() {
    if (this.currentQueIndex > 0) {
      this.currentQueIndex--;
    }
  }

  goNext() {
    if (this.currentQueIndex < this.selectedCategoryQuestions.length - 1) {
      this.currentQueIndex++;
    }
  }

  get progressPercentage() {
    const attempted = Object.keys(this.submittedAnswers).length;
    return (attempted / this.selectedCategoryQuestions.length) * 100;
  }

  onJump(i: number) {
    this.currentQueIndex = i;
  }

  onSubmitTest() {
    this.quizService.completeQuiz(this.results);
    let score = 0;
    let quizSummary = this.selectedCategoryQuestions.map(
      (que: any, index: number) => {
        let selectedAnswer = this.submittedAnswers[index] || null;
        let correctAnswer = que.correctAnswer;
        let status = selectedAnswer ? 'Attempted' : 'Not Attempted';

        if (selectedAnswer === correctAnswer) {
          score++;
        }

        return {
          question: que.question,
          options: que.options,
          selectedAnswer: selectedAnswer,
          correctAnswer: correctAnswer,
          status: status,
        };
      }
    );

    // Navigate to result component with quiz summary
    this.router.navigate(['/result'], {
      state: {
        score: score,
        total: this.selectedCategoryQuestions.length,
        summary: quizSummary,
        questions: this.selectedCategoryQuestions, // Pass questions array
        selectedAnswers: this.submittedAnswers, // Pass selected answers array
        categoryIndex: this.myIndex,
      },
      replaceUrl: true,
    });
  }
}
