import React from 'react'

//import css
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import bootstrapjs from 'bootstrap'

class Board extends React.Component {

  ingredients(ingredients) {
    return ingredients.map((ingredient,index) => (
     
      <li key={index} className="list-group-item">{ingredient}</li>
    
    ))
  }

//populate list of recipe to UI
  recipeList() {
    return this.props.recipe.map((recipe, index) => 
       (
          <div key={ index } className="panel panel-info">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                  {recipe.name}</a>
              </h4>
            </div>
            <div id="collapse1" className="panel-collapse collapse in">
              <div className="panel-body">
              <ul className="list-group">
              {this.ingredients(recipe.ingredients)}
              </ul>
              </div>
            </div>
          </div>
      )
    )
  }

  render() {
    return (
      <div>
        <div className="panel-group" id="accordion">
        {this.recipeList()}
        </div>
      </div>

    )
  }
}

export default Board
