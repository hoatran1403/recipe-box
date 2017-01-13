export const addRecipe = (recipe) => {
  let parsedRecipe = {}
  parsedRecipe.name = recipe.name
  parsedRecipe.ingredients = recipe.ingredients.split(',')
  return ({
     type: 'ADD_RECIPE',
    parsedRecipe
  })
}

export const deleteRecipe = (recipe) => ({
    type: 'DELETE_RECIPE',
    recipe
})

export const editRecipe = (recipe) => ({
  type: 'EDIT_RECIPE',
  recipe
})

