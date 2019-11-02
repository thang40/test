import { IActionModel } from "../../commons/types";

const HOME_FETCH_SEARCH_REQUEST = "@@Home/FETCH_SEARCH_REQUEST";

// action creator
export const searchRequestAction = (searchText: string) => {
  return { type: HOME_FETCH_SEARCH_REQUEST, payload: searchText };
};
// reducer
const initialState = {
  searchData: []
};

export const HomeReducer = (state = initialState, action: IActionModel) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
