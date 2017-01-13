import React from 'react'

class Modal extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault();

        const name = this.refs.recipe.value;
        const ingredients = this.refs.ingredients.value;

        if (name !== "") {
            // clear user input
            this.refs.recipe.value = '';
            this.refs.ingredients.value = '';
            const recipe = { name, ingredients }

            this.props.actionHandle(recipe)
        }
    }

    render() {
        return (
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    {/*Modal content*/}
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">{this.props.name} a Recipe</h4>
                        </div>

                        <div className="modal-body">

                            <div className="form-group">
                                <label htmlFor="recipe">Recipe</label>
                                <input type="text" className="form-control" ref="recipe" placeholder="Recipe Name" />

                                <label htmlFor="ingredients">Ingredients</label>
                                <input type="text" className="form-control" ref="ingredients" placeholder="Enter Ingredients, Separated, By Commas" />
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmit} >{this.props.name} Recipe</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

Modal.PropTypes = {
    name: React.PropTypes.string,
    actionHandle: React.PropTypes.func.isRequired
}

export default Modal