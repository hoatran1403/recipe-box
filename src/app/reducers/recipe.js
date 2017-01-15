const defaultState = [{
  id: 0,
  name: 'Pumkin Pie',
  ingredients: 'ingredient 1,ingredient 2, ingredient 3'
},
{
  id: 1,
  name: 'Spaghetti',
  ingredients: 'ingredient 1,ingredient 2, ingredient 3'
}, {
  id: 2,
  name: 'Onion Pie',
  ingredients: 'ingredient 1,ingredient 2, ingredient 3'
}, {
  id: 3,
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
      return state.filter((item) => item.id !== action.recipe.id)

    case "EDIT_RECIPE":
    return state.map((item) => {
      if (item.id == action.recipe.id){
        return action.recipe
      }
      return item 
    })
    default:
      return state
  }
}

export default recipe
