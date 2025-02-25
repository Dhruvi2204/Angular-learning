import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quizCompleted = false;

  completeQuiz(results: any): void {
    this.quizCompleted = true;
    // Save the results object (it can contain score, summary, etc.) in localStorage.
    localStorage.setItem('quizResults', JSON.stringify(results));
  }

  resetQuiz(): void {
    this.quizCompleted = false;
    localStorage.removeItem('quizResults');
  }

  isQuizCompleted(): boolean {
    // Check both the service flag and/or localStorage.
    return this.quizCompleted || !!localStorage.getItem('quizResults');
  }

  getQuizResults(): any {
    const storedResults = localStorage.getItem('quizResults');
    return storedResults ? JSON.parse(storedResults) : null;
  }
}
