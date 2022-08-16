import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payLoad.hits,
        nbPages: action.payLoad.nbPages,
      };
    case REMOVE_STORY:
      // console.log(action.payLoad);
      return {
        ...state,
        isLoading: false,
        hits: state.hits.filter((story) => story.objectID !== action.payLoad),
      };
    default:
      throw new Error(`No Matching '${action.type}' action type`);
  }
};
export default reducer;
