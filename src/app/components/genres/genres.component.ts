import {Component, OnInit} from '@angular/core';
import {DataService, MovieService} from "../../services";
import {IGenre} from "../../interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: IGenre[];

  constructor(private movieService: MovieService,
              private dataService: DataService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.movieService.getGenre().subscribe(({genres}) => {
      this.genres = genres;
      this.dataService.storage.next(genres)
    })
  }

  sortGenre(genre: IGenre) {
    this.router.navigate([genre.id])
  }
}
