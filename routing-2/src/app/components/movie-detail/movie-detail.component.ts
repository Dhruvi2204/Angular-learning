import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  category: string | null = null;
  private readonly router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  constructor(private movieSrv: MovieService) {}
  ngOnInit(): void {
    const movieId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.movie = this.movieSrv.getMovie(movieId);

    //! just for information, we are accessing category from query parameters.
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.category = params.get('category');
    });

    this.activatedRoute.fragment.subscribe((fragment) => {
      if (fragment) {
        document
          .getElementById(fragment)
          ?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  onHome() {
    this.router.navigate(['/']);
  }
  onReviews() {
    this.router.navigate([], { fragment: 'reviews' });
  }
}
