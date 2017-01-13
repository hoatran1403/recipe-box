const defaultState = [{
  name: 'Pumkin Pie',
  ingredients: 'ingredient 1,ingredient 2, ingredient 3'
},
{
  name: 'Spaghetti',
  ingredients: 'ingredient 1,ingredient 2, ingredient 3'
}, {
  name: 'Onion Pie',
  ingredients: 'ingredient 1,ingredient 2, ingredient 3'
}, {
  name: 'Recipe name',
  ingredients: 'ingredient 1,ingredient 2, ingredient 3'
}
]

const recipe = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [
        ...state,
        action.recipe
      ]
    case "DELETE_RECIPE":
      return state.filter((item) => item.name !== action.recipe.name)
    case "EDIT_RECIPE":
    return state.map((item) => {
      if (item.name == action.recipe.name){
        return action.recipe
      }
      return item 
    })
    default:
      return state
  }
}

export default recipe
