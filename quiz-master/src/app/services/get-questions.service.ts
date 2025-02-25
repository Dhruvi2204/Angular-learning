import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetQuestionsService {
  // ! check assets in angular.json
  private jsonUrl = '../../assets/questions.json';
  constructor(private http: HttpClient) {}
  getQuestions(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
