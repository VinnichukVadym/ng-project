import {environment} from "../../environments/environment";

const {API}:any = environment;

const urls = {
  movies: `${API}/discover/movie`,
  movie: `${API}/movie`,
  genres: `${API}/genre/movie/list`,
  search: `${API}/search/movie?query=`,
}

export {
  urls
}
