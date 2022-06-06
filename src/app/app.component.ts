import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-project';

  theme: null | string = 'theme-dark' ;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.activatedRoute.params.subscribe(() => {
      if (localStorage.getItem('theme') === 'theme-dark') {
        localStorage.setItem('theme', 'theme-light');
      } else {
        localStorage.setItem('theme', 'theme-dark');
      }
      this.theme = localStorage.getItem('theme')
    })
  }


}
