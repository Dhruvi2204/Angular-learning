import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './components/counter/store/counter.reducer';
import { groceryReducer } from './store/reducers/grocery.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { bucketReducer } from './store/reducers/bucket.reducer';
// import { bucketReducer } from './store/reducers/bucket.reducer';
export const appConfig: ApplicationConfig = {
  providers: [
    // provideStore({ counter: counterReducer }),

    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ groceries: groceryReducer, myBucket: bucketReducer }),
    provideStoreDevtools({}),
  ],
};
