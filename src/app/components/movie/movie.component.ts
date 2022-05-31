import {Component, Input, OnInit} from '@angular/core';

import {MovieService} from "../../services";
import {IGenre, IMovie} from "../../interfaces";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movie: IMovie;
  genres: IGenre[];

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.movieService.getGenre().subscribe(value => {
      let arr = [] as IGenre[];
      for (let id of this.movie.genre_ids) {
        value.genres.map(genre => {
          if (id === genre.id) {
            arr.push(genre)
          }
        });
        this.genres = arr
      }
    })

  }

}
