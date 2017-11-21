/**
 * This service will make API calls to theMovieDB
 */
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { Movie } from "./movie";
import { UtilService } from "../../shared/services/util.service";

@Injectable()
export class MovieService {

  private baseURL: string;
  private popularURL: string;
  private latestURL: string;

  constructor (
    private _http: Http,
    private _util: UtilService
  ) {
    this.baseURL = `${this._util.theMovieDbURL}/movie`;
    this.popularURL = "/popular";
    this.latestURL = "/latest";
  }

  movies(page: number = 1, type: string = "all"): Observable<Movie[]> {
    let url: string = `${this.baseURL}`;
    if (type !== "all") {
      url += this[`${type}URL`];
    }
    url += `?api_key=${this._util.apiKey}`;
    url += `&page=${page}`;
    return this._http.get(url).map(response => response.json().results).catch(err => {
      return Observable.of(null);
    });
  }

}
