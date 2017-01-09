export const addRecipe = (recipe) => {
  let parsedRecipe = {}
  parsedRecipe.name = recipe.name
  parsedRecipe.ingredients = recipe.ingredients.split(',')
  return (
    type: 'ADD_RECIPE',
    parsedRecipe
  )
}
