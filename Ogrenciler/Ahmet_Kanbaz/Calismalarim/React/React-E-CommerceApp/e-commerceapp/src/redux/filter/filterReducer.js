const initialState = {
  products: [],
  searchInput: ''
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_PRODUCTS':
        return {
        ...state,
          products: action.products
        }
      case 'SET_SEARCH_INPUT':
        return {
        ...state,
          searchInput: action.searchInput
        }
      default:
        return state
    }
}

export default filterReducer