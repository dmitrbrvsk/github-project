import { SEARCH_REPOS_REQUEST, SEARCH_REPOS_SUCCESS, SEARCH_REPOS_FAILED } from '../constants/constants';

const initialState = {
  loading: false,
  search_repos_results: [],
};

export default function SearchReposReducer (state = initialState, action) {

  switch (action.type) {

      case SEARCH_REPOS_REQUEST:
        return {
          loading: true
        }

      case SEARCH_REPOS_SUCCESS:
        return {
          loading: false,
          search_repos_results: action.payload.results,
        }

      case SEARCH_REPOS_FAILED:
        return {
          loading: false,
          search_repos_results: []
        }

      default:
        return state;
  }
}