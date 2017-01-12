const defaultState = {name:'recipe name', ingredients: ['ingredient 1','ingredient 2','ingredient 3']}

const recipe = (state = [defaultState], action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [
        ...state,
        action.parsedRecipe
      ]
    default:
    return state
  }
}

export default recipe
