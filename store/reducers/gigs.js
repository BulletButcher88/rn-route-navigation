import { GIGS } from '../../data/dummyData'
import { TOGGLE_IDENTIFIER_FAVORITE, SET_FILTERS } from '../actions/gigs'

const initialState = {
  gigs: GIGS,
  filterGigs: GIGS,
  favoriteGigs: [],
}

const gigReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IDENTIFIER_FAVORITE:
      const existingIndex = state.favoriteGigs.findIndex(gig => gig.id === action.gigId)
      if (existingIndex >= 0) {
        const updatedFavGigs = [...state.favoriteGigs]
        updatedFavGigs.splice(existingIndex, 1)
        return { ...state, favoriteGigs: updatedFavGigs }
      } else {
        const addGig = state.gigs.find(gig => gig.id === action.gigId)
        return { ...state, favoriteGigs: state.favoriteGigs.concat(addGig) }
      }
    case SET_FILTERS:
      const appliedFilter = action.filters
      const updatedFilteredGigs = state.gigs.filter(gig => {
        if (appliedFilter.location && !gig.isLocal) {
          return false
        }
        if (appliedFilter.freeEntrance && !gig.isFree) {
          return false
        }
        if (appliedFilter.isAllAges && !gig.isAllAges) {
          return false
        }
        if (appliedFilter.isFestival && !gig.isFestival) {
          return false
        }
        return true
      })
      return { ...state, filterGigs: updatedFilteredGigs }
    default:
      return state;
  }
}

export default gigReducer;