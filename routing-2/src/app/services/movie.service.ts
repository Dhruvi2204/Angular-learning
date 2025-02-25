import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies = [
    { id: 1, title: 'Inception', category: 'Sci-Fi' },
    { id: 2, title: 'The Dark Knight', category: 'Action' },
    { id: 3, title: 'Interstellar', category: 'Sci-Fi' },
  ];
  constructor() {}

  getMovies() {
    return this.movies;
  }

  getMovie(id: number) {
    return this.movies.find((movie) => id === movie.id);
  }
}
