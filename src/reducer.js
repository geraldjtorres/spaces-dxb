export const initialState = {
  spaces: [],
  categories: [],
  sockets: [],
  internetSpeeds: [],
  noiseLevels: []
}

const reducer = (state, action) => {
  console.log('action', action)
  switch (action.type) {
    case 'GET_SPACES':
      return {
        ...state,
        spaces: action.item
      }
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.item
      }
    case 'GET_SOCKETS':
      return {
        ...state,
        sockets: action.item
      }
    case 'GET_INTERNETSPEEDS':
      return {
        ...state,
        internetSpeeds: action.item
      }
    case 'GET_NOISELEVELS':
      return {
        ...state,
        noiseLevels: action.item
      }
    default:
      return state
  }
}

export default reducer
