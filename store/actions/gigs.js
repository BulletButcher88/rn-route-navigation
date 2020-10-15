export const TOGGLE_IDENTIFIER_FAVORITE = 'TOGGLE_IDENTIFIER_FAVORITE';

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_IDENTIFIER_FAVORITE,
    gigId: id
  }
}