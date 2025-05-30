import { TOGGLE_LIKE } from "../actions/favoritesActions";

const initialState = {
  likedSongs: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKE: {
      const exists = state.likedSongs.find((s) => s.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          likedSongs: state.likedSongs.filter((s) => s.id !== action.payload.id),
        };
      } else {
        return {
          ...state,
          likedSongs: [...state.likedSongs, action.payload],
        };
      }
    }
    default:
      return state;
  }
};
export default favoritesReducer;
