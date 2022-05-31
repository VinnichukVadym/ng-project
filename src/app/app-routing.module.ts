import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HomeComponent} from "./components/home/home.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'movie-details', component: MovieDetailsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
