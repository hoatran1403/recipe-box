import { connect } from 'react-redux'
import Board from '../components/Board'
import * as actions from '../actions/actionGenerator'

const mapStateToProps = (state) => (state)
const mapDispatchToProps = ({dispatch}) => {
  return { addRecipe: () => (dispatch(addRecipe())) }
}

const BoardComponent = connect(mapStateToProps,mapDispatchToProps)(Board)

export default BoardComponent
