import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { GetQuestionsService } from '../../../../../quiz-master/src/app/services/get-questions.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from '../results/results.component';
import { QuizService } from '../../services/quiz.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule, FormsModule, ResultsComponent],
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

  // Flag to control whether the quiz UI or results are shown.
  quizSubmitted: boolean = false;
  // This object holds all quiz result data.
  resultData: any;

  constructor(
    private getQueSrv: GetQuestionsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private quizService: QuizService
  ) {}

  ngOnInit() {
    // Get the category index from the route parameters.
    this.activatedRoute.params.subscribe((params) => {
      this.myIndex = +params['myIndex'];
    });
    this.loadQuestions();

    // Attempt to load any previously stored results (for example, if the user refreshed on the results page).
    const storedResults = this.quizService.getQuizResults();
    if (storedResults) {
      this.results = storedResults;
    }
  }

  loadQuestions() {
    this.getQueSrv.getQuestions().subscribe((res: any) => {
      this.quesObj = res.categories;
      this.selectedCategoryQuestions = this.quesObj[this.myIndex].questions;
      this.shuffleQuestions();
      this.initializeSubmitState();
    });
  }

  // Fisher–Yates Shuffle Algorithm
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
      this.submitEnabled[index] = false;
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

  // Called when the user clicks "Submit Test"
  onSubmitTest() {
    // Complete any additional quiz logic if needed.
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

    // Prepare the resultData object to pass to the results component.
    this.resultData = {
      score: score,
      total: this.selectedCategoryQuestions.length,
      summary: quizSummary,
      questions: this.selectedCategoryQuestions,
      selectedAnswers: this.submittedAnswers,
      categoryIndex: this.myIndex,
    };

    // Store the results in the QuizService (e.g., in localStorage) so they persist on refresh.
    this.quizService.setQuizResults(this.resultData);

    // Hide the quiz UI and show the results component.
    this.quizSubmitted = true;
  }

  // Handler for the replay event from the results component.
  handleReplay() {
    // Reset the flag so the quiz UI is displayed again.
    this.quizSubmitted = false;

    // Reset quiz state variables.
    this.currentQueIndex = 0;
    this.selectedOptions = {};
    this.submittedAnswers = {};
    this.initializeSubmitState();

    // Optionally reshuffle the questions for a new attempt.
    this.shuffleQuestions();

    // Reset any stored results in the QuizService.
    this.quizService.resetQuiz();
  }

  // Handler for the categories event from the results component.
  handleCategories() {
    this.quizService.resetQuiz();
    this.router.navigate(['/categories']);
  }
}
