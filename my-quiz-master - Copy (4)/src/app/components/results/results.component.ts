import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerformancePipe } from '../../pipes/performance.pipe';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-result',
  imports: [CommonModule, PerformancePipe, FormsModule, NavbarComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  results: any;
  score: number = 0;
  totalQuestions: number = 0;
  quizSummary: any[] = [];
  questions: any[] = []; // Store all questions
  selectedAnswers: any = {}; // Store selected answers
  categoryIndex!: number;

  constructor(private router: Router, private quizService: QuizService) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      this.score = state['score'];
      this.totalQuestions = state['total'];
      this.quizSummary = state['summary'];
      this.questions = state['questions'];
      this.selectedAnswers = state['selectedAnswers'];
      this.categoryIndex = state['categoryIndex'];
    }
  }

  ngOnInit(): void {
    // Try to get the data from the router state
    if (history.state && history.state.score !== undefined) {
      this.results = history.state;
    } else {
      // If state is empty (e.g., on refresh), get the stored results from the service/localStorage.
      this.results = this.quizService.getQuizResults();
    }
  }

  onReplay() {
    this.quizService.resetQuiz();
    this.router.navigate(['/quiz', this.categoryIndex], { replaceUrl: true });
  }

  onCategories() {
    this.quizService.resetQuiz();
    this.router.navigate(['/categories'], { replaceUrl: true });
  }
}
