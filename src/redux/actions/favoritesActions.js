export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const toggleLike = (song) => ({
  type: TOGGLE_LIKE,
  payload: song,
});
