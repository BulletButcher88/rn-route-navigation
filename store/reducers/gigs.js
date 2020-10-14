import { GIGS } from '../../data/dummyData'

const initialState = {
  gigs: GIGS,
  filterGigSettings: GIGS,
  favoriteGigs: [],
}

const gigReducer = (state = initialState, action) => {
  return state;
}

export default gigReducer;