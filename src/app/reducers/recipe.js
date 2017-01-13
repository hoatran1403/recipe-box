const defaultState = [{
  name:'Pumkin Pie', 
  ingredients: ['ingredient 1','ingredient 2','ingredient 3']
},
{
  name:'Spaghetti', 
  ingredients: ['ingredient 1','ingredient 2','ingredient 3']
},{
  name:'Onion Pie', 
  ingredients: ['ingredient 1','ingredient 2','ingredient 3']
},{
  name:'Recipe name', 
  ingredients: ['ingredient 1','ingredient 2','ingredient 3']
}
]

const recipe = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [
        ...state,
        action.parsedRecipe
      ]
      case "DELETE_RECIPE":
      return state.filter((item) => item.name !== action.recipe.name)
    default:
    return state
  }
}

export default recipe
