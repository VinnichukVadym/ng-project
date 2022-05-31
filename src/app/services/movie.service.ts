import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IBuffer, IObjGenres} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getAllMovies(): Observable<IBuffer> {
    return this.httpClient.get<IBuffer>(urls.movies)
  }

  getGenre(): Observable<IObjGenres> {
    return this.httpClient.get<IObjGenres>(urls.genres)
  }
}
