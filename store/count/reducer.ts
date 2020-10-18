import { countActionTypes } from './action'

const countInitialState = {
  count: 3,
}

export default function reducer(state = countInitialState, action:any) {
  switch (action.type) {
    case countActionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1,
      })
    default:
      return state
  }
}