import {environment} from "../../environments/environment";

const {API} = environment;

const urls = {
  movies: `${API}/discover/movie`,
  genres: `${API}/genre/movie/list`,

}

export {
  urls
}
