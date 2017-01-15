import { connect } from 'react-redux'
import Board from '../components/Board'
import * as actions from '../actions/actionGenerator'

const mapStateToProps = (state) => ({
    recipes: state.recipes
}) 

const mapDispatchToProps = (dispatch) => ({
deleteRecipe: (recipe) => (dispatch(actions.deleteRecipe(recipe)))    
})

const BoardContainer = connect (mapStateToProps,mapDispatchToProps)(Board)
export default BoardContainer