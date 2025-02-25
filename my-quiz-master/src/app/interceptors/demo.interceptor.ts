// src/app/interceptors/demo.interceptor.ts
import {
  HttpInterceptorFn,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const demoInterceptor: HttpInterceptorFn = (req, next) => {
  // Log the outgoing request details.
  console.log(`API Call Initiated: ${req.method} ${req.url}`);

  return next(req).pipe(
    tap({
      // Log the successful response details.
      next: (event) => {
        if (event instanceof HttpResponse) {
          console.log(`API Call Successful: ${event.status} ${event.url}`);
        }
      },
      // Log error details if the call fails.
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          console.error(
            `API Call Failed: ${error.status} ${error.url} - ${error.message}`
          );
        }
      },
    })
  );
};
