export const countActionTypes = {
    ADD: 'ADD',
  }
  
  export const addCount = () => (dispatch:any) => {
    return dispatch({ type: countActionTypes.ADD })
  }