import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'performance',
})
export class PerformancePipe implements PipeTransform {
  transform(
    score: number | null | undefined,
    total: number | null | undefined
  ): string {
    if (!total || total === 0) {
      return '📌 0 Attempted'; // Ensures it's shown correctly
    }

    const percentage: number = (score! / total) * 100;

    if (percentage === 100) {
      return '🏆 Outstanding performance!';
    } else if (percentage > 70) {
      return '✅ Excellent performance!';
    } else if (percentage >= 33) {
      return '⚠️ Average performance, keep practicing!';
    } else {
      return '❌ Bad performance, needs more preparation.';
    }
  }
}
