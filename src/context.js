import React, { useContext, useEffect, useReducer, useState } from 'react';

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';
import reducer from './reducer';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
  isLoading: true,
  hits: [],
  query: 'react',
  page: 0,
  nbPages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchSTories = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: SET_STORIES,
        payLoad: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payLoad: id });
    // console.log(id);
    // const newStory = state.hits.filter((hit) => hit.objectID !== id);
    // console.log(newStory);
    // state.hits = [...newStory];
  };
  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payLoad: query });
  };
  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payLoad: value });
  };
  useEffect(() => {
    fetchSTories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);
  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
