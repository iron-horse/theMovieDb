/**
 * Movie Module
 */

import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

import { MoviesRoutingModule } from "./movies-routing.module";

import { MovieListComponent } from "./movie-list/list.component";
import { MovieDetailsComponent } from "./movie/details.component";
import { MovieService } from "./shared/movie.service";

// List of component to export
const exportedComponent: any[] = [
  MovieListComponent,
  MovieDetailsComponent
];

@NgModule({
  imports: [ SharedModule, MoviesRoutingModule ],
  declarations: [
    ...exportedComponent
  ],
  exports: [ ...exportedComponent ],
  providers: [ MovieService ]
})

export class MoviesModule { }
