import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./reducers/favoritesReducer";
import playerReducer from "./reducers/playerReducer";
import selectedSongReducer from "./reducers/selectedSongReducer";
import ApiReducer from "./reducers/ApiReducer";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  player: playerReducer,
  selectedSong: selectedSongReducer,
  search: ApiReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
