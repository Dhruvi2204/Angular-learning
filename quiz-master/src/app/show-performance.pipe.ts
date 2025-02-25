import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showPerformance',
})
export class ShowPerformancePipe implements PipeTransform {
  transform(score: number, outOf: number): unknown {
    let percent: number = (score / outOf) * 100;
    if (percent >= 50 && percent <= 70) {
      return 'Average';
    } else if (percent >= 80) {
      return 'Good Performance';
    } else {
      return 'Needs improvement. Better Luck next Time!';
    }
  }
}
