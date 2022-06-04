import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services";
import {ActivatedRoute} from "@angular/router";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-sort-genre',
  templateUrl: './sort-genre.component.html',
  styleUrls: ['./sort-genre.component.css']
})
export class SortGenreComponent implements OnInit {

  movies: IMovie[];

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.activatedRoute.params.subscribe(value => {
        this.movieService.sortGenre(value['genre'],page || 1).subscribe(({results}) => {
          this.movies = results
        })
      })

    })
  }

}
