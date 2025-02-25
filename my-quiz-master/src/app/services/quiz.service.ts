import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private results: any = null;

  setQuizResults(result: any) {
    this.results = result;
    localStorage.setItem('quizResults', JSON.stringify(result));
  }

  getQuizResults() {
    if (this.results) {
      return this.results;
    } else {
      const stored = localStorage.getItem('quizResults');
      if (stored) {
        this.results = JSON.parse(stored);
        return this.results;
      }
    }
    return null;
  }

  completeQuiz(results: any) {
    // Additional logic if needed.
    this.setQuizResults(results);
  }

  resetQuiz() {
    this.results = null;
    localStorage.removeItem('quizResults');
  }
}
