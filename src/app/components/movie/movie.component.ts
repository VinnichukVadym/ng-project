import {Component, Input, OnInit} from '@angular/core';

import {MovieService} from "../../services";
import {IGenre, IMovie} from "../../interfaces";
import {DataService} from "../../services";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movie: IMovie;
  genre: IGenre;
  genres: IGenre[];

  constructor(private movieService: MovieService,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => this.genres = value)
    for (let genre of this.genres) {
      this.movie.genre_ids.map(id => {
        if (id === genre.id) {
          this.genre = genre
        }
      });
    }
  }


}
