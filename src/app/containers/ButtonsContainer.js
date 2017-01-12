import { connect } from 'react-redux'
import Buttons from '../components/Buttons'
import * as actions from '../actions/actionGenerator'


const mapStateToProps = (state) => (state)

const mapDispatchToProps = (dispatch) => ({
    addRecipe: (recipe) => dispatch(actions.addRecipe(recipe))
})

const ButtonsContainer = connect(mapStateToProps,mapDispatchToProps)(Buttons)
export default ButtonsContainer
