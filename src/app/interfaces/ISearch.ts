import {IResults} from "./IResult";

export interface ISearch {
  page: number;
  results: IResults[];
  total_pages: number;
  total_results: number;
}
