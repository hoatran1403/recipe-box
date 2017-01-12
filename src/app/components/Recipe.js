import React from 'react'

class Recipe extends React.Component {

    ingredients(ingredients) {
        return ingredients.map((ingredient, index) => (
            <li key={index} className="list-group-item">{ingredient}</li>
        ))
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
                            {this.ingredients(this.props.recipe.ingredients)}
                        </ul>
                        <button type="button" className="btn btn-danger">Delete</button>&nbsp;
                        <button type="button" className="btn btn-primary">Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}

Recipe.propTypes = {
    index: React.PropTypes.number.isRequired,
    recipe: React.PropTypes.object.isRequired
}

export default Recipe