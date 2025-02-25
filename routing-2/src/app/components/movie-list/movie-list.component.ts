import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  movieList!: any;
  constructor(private movieSrv: MovieService, private router: Router) {
    this.movieList = this.movieSrv.getMovies();
  }

  gotoMovie(movie: any) {
    this.router.navigate(['/movie', movie.id], {
      queryParams: { category: movie.category },
    });
  }
}
