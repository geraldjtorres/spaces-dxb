export const initialState = {
  spaces: []
}

const reducer = (state, action) => {
  console.log('action', action)
  switch (action.type) {
    case 'GET_SPACES':
      return {
        ...state,
        spaces: action.item
      }
    default:
      return state
  }
}

export default reducer
