import { connect } from 'react-redux'
import Recipe from '../components/Recipe'
import * as actions from '../actions/actionGenerator'

const mapStateToProps = (state, props) => ({
    index: props.index,
    recipe: props.recipe,
    state
})
const mapDispatchToProps = (dispatch) => ({
    deleteRecipe: (recipe) => (dispatch(actions.deleteRecipe(recipe))) 
})

const RecipeComponent = connect(mapStateToProps,mapDispatchToProps)(Recipe)

export default RecipeComponent
