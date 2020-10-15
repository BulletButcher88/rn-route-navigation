export const TOGGLE_IDENTIFIER_FAVORITE = 'TOGGLE_IDENTIFIER_FAVORITE';
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_IDENTIFIER_FAVORITE,
    gigId: id
  }
}

export const setFilters = filterSetting => {
  return {
    type: SET_FILTERS,
    filters: filterSetting
  }
}