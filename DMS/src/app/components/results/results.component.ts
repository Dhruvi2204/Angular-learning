import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerformancePipe } from '../../pipes/performance.pipe';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-result',
  imports: [CommonModule, PerformancePipe, FormsModule, NavbarComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  score: number = 0;
  totalQuestions: number = 0;
  quizSummary: any[] = [];
  questions: any[] = []; // Store all questions
  selectedAnswers: any = {}; // Store selected answers
  categoryIndex!: number;

  constructor(private router: Router) {
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

  onReplay() {
    this.router.navigate(['/quiz', this.categoryIndex]);
  }

  onCategories() {
    this.router.navigate(['/categories']);
  }
  
}
