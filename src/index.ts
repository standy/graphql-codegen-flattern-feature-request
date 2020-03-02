import {FilmsQuery} from './generated/graphql';
// This is hard
type Film = NonNullable<NonNullable<NonNullable<FilmsQuery['allFilms']>['films']>[0]>;


import {FilmsQuery_allFilms_films} from './generated/graphql_i_wish';
// That much easier
type Film2 = FilmsQuery_allFilms_films;

