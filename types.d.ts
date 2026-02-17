import { Float } from "react-native/Libraries/Types/CodegenTypes";

export type Movie = {
  [x: string]: never[];
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  original_name: string;
  overview: string;
  popularity: Float;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: Float;
  vote_count: number;
};
