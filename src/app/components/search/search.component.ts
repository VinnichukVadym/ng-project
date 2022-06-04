import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {MovieService} from "../../services";
import {IResults} from "../../interfaces";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  searchValue: IResults[];

  constructor(private movieService: MovieService) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.required])
    })

  }

  search() {
    let rawValue = this.form.getRawValue();
    console.log(rawValue)
    this.movieService.search(rawValue.search).subscribe(({results}) =>this.searchValue =  results)
  }
}
