import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() resultData: any;

  // Output events to communicate with the parent component
  @Output() replayEvent: EventEmitter<void> = new EventEmitter();
  @Output() categoriesEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onReplay() {
    this.replayEvent.emit();
  }

  onCategories() {
    this.categoriesEvent.emit();
  }
}
