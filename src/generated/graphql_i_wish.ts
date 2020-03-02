export type Maybe<T> = T | null;

// ...

export type FilmsQueryVariables = {};

export type FilmsQuery_allFilms_films = {
  __typename?: "Film";
  title: Maybe<string>;
  director: Maybe<string>;
};

export type FilmsQuery_allFilms = {
  __typename?: "FilmsConnection";
  films: Maybe<Array<Maybe<FilmsQuery_allFilms_films>>>;
};

export type FilmsQuery = {
  __typename?: "Root";
  allFilms: Maybe<FilmsQuery_allFilms>;
};
