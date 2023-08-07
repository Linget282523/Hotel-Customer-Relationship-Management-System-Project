// reducers.js
const initialState = {
    accounts: [],
    rooms: [],
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_ACCOUNTS_SUCCESS":
        return { ...state, accounts: action.payload, error: null };
      case "FETCH_ROOMS_SUCCESS":
        return { ...state, rooms: action.payload, error: null };
      case "FETCH_ACCOUNTS_FAILURE":
      case "FETCH_ROOMS_FAILURE":
        return { ...state, error: action.error };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  