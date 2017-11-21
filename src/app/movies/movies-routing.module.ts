/**
 * Register Routes for movie related components
 */
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { MovieListComponent } from "./movie-list/list.component";
import { MovieDetailsComponent } from "./movie/details.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "movies",
        component: MovieListComponent,
      },
      {
        path: "movies/:id",
        component: MovieDetailsComponent,
      }
    ])
  ],
  exports: [ RouterModule ]
})
export class MoviesRoutingModule { }
