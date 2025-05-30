export const SET_SELECTED_SONG = "SET_SELECTED_SONG";

export const setSelectedSong = (song) => ({
  type: SET_SELECTED_SONG,
  payload: song,
});
