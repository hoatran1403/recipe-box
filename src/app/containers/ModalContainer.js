import { connect } from 'react-redux'
import Modal from '../components/Modal'
import * as actions from '../actions/actionGenerator'


const mapStateToProps = (state, props) => ({
    name: props.name
})

const mapDispatchToProps = (dispatch,props) => {
    if(props.name == "Add"){
        return {
            actionHandle: (recipe) => dispatch(actions.addRecipe(recipe))
        }
    }
    else if(props.name == "Edit"){
        return {
            actionHandle: (recipe) => dispatch(actions.editRecipe(recipe))
        }
    }

}


const ModalContainer = connect(mapStateToProps,mapDispatchToProps)(Modal)
export default ModalContainer
