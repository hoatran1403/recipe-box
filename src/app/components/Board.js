import React from 'react'
import RecipeContainer from '../containers/RecipeContainer'

//import css
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import bootstrapjs from 'bootstrap'

class Board extends React.Component {
  recipeList() {
    return this.props.recipe.map((recipe, index) =>{
      return  (
        <RecipeContainer key={index} index={index} recipe={recipe} />
      )
    })
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
