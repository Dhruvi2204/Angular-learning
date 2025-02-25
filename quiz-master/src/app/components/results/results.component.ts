import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ShowPerformancePipe } from '../../show-performance.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [ShowPerformancePipe, CommonModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  @Input() score: number = 0;
  @Input() selectedOptArr: any[] = [];
  @Input() outOf: number = 5;
  @Input() categoryList: any;
  @Input() myIndexValue: number = 0;

  catIndex: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Ensure data is correctly retrieved from navigation state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.score = navigation.extras.state['score'] ?? this.score;
      this.catIndex = navigation.extras.state['catIndex'] ?? this.catIndex;
      this.outOf = navigation.extras.state['total'] ?? this.outOf;
    }
  }

  loadCategories(): void {
    this.router.navigate(['/categories']);
  }

  retakeQuiz(): void {
    this.router.navigate(['quiz', this.catIndex]);
  }

  ngOnDestroy(): void {
    localStorage.removeItem('submit');
  }
}
