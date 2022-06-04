import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IBuffer, IObjGenres, ISearch} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getAllMovies(page: number = 1): Observable<IBuffer> {
    return this.httpClient.get<IBuffer>(urls.movies, {params: {page}})
  }

  getById(): Observable<IBuffer> {
    return this.httpClient.get<IBuffer>(urls.movies)
  }

  getGenre(): Observable<IObjGenres> {
    return this.httpClient.get<IObjGenres>(urls.genres)
  }

  search(params: string): Observable<ISearch> {
    return this.httpClient.get<ISearch>(`${urls.search}${params}`)
  }

  sortGenre(id: number,page: number = 1): Observable<IBuffer> {
    return this.httpClient.get<IBuffer>(`${urls.movies}?with_genres=${id}`, {params: {page}})
  }

}
