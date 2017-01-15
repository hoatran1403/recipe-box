let nextId = 4

export const addRecipe = (recipe) => {
  return ({
    id: nextId++,
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

