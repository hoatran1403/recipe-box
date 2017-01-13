export const addRecipe = (recipe) => {
  return ({
     type: 'ADD_RECIPE',
    recipe
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

