import { SET_CURRENT_SONG } from "../actions/playerActions";

const initialState = {
  currentSong: null,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      console.log("riceve canzone:", action.payload);
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
