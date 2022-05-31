import {Component, OnInit} from '@angular/core';

import {MovieService} from "../../services";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: IMovie[];
  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(value => this.movies = value.results)
  }

}
