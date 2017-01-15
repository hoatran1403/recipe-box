import React from 'react'
import ModalContainer from '../containers/ModalContainer'

class Recipe extends React.Component {

    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    ingredients(ingredients) {
        if(ingredients){
            const parsedIngredients = ingredients.split(',')
        return parsedIngredients.map((ingredient, index) => (
            <li key={index} className="list-group-item">{ingredient}</li>
        ))
        }
    }

    handleDelete(e) {
        e.preventDefault()
        this.props.deleteRecipe(this.props.recipe)
    }

    render() {
        return (
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href={'#collapse' + this.props.index}>
                                 {this.props.recipe.name}
                            </a>
                        </h4>
                    </div>
                    <div id={'collapse' + this.props.index} className="panel-collapse collapse">
                        <div className="panel-body">
                            <ul className="list-group">
                                { this.ingredients( this.props.recipe.ingredients ) }
                            </ul>
                            <button type="button" className="btn btn-danger" onClick={this.handleDelete}>Delete</button>&nbsp;
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#myModal" + this.props.index}>Edit</button>
                        </div>
                    </div>
                    <ModalContainer name="Edit" recipe = { this.props.recipe } modalName = { "myModal" + this.props.index} />
                </div>
        )
    }
}

Recipe.propTypes = {
    index: React.PropTypes.number.isRequired,
    recipe: React.PropTypes.object.isRequired,
    deleteRecipe: React.PropTypes.func.isRequired
}

export default Recipe