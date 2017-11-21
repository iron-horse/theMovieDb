/**
 * This component will display the list posters of popular images
 */
import { Component, OnInit, OnDestroy } from "@angular/core";
import { MovieService } from "../shared/movie.service";
import { Movie } from "../shared/movie";
import { Subscription } from "rxjs/Subscription";
import { UtilService } from "../../shared/services/util.service";

// TODO: add lazy loading for images
@Component({
  selector: ".bg-movie-list",
  template: `
  <div *ngIf="movies" class="img-wrapper">
    <!-- we can use srcset for responsive images based on screen size -->
    <img class="img" *ngFor="let movie of movies" src="{{this._util.posterURL(movie.poster_path)}}" alt="{{movie.title}}" (click)="getDetails(movie.id)" />
  </div>
  `,
  styleUrls: ["./list.component.css"]
})

export class MovieListComponent implements OnInit, OnDestroy {

  private movies: Movie[] = [];
  private sub1: Subscription;
  constructor(
    private _movie: MovieService,
    private _util: UtilService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  ngOnDestroy(): void {
    this.sub1 && this.sub1.unsubscribe();
  }

  getMovies(page: number = 1): void {
    this.sub1 = this._movie.movies(page, "popular").subscribe((movies: Movie[]) => {
      // console.log("movies", movies);
      this.movies.push(...movies);
    });
  }

  getDetails(id: number): void {
    alert("TODO: Get Image Details for image ID: " + id);
  }
}
