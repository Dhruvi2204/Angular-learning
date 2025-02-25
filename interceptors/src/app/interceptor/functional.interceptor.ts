import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const functionalInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  return next(req).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        // event.status= 401;
        console.log(req.url, 'returned a response with status', event.status);
      }
    })
  );
};
