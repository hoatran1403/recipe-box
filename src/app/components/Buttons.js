import React from 'react'

class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    let recipe = ""

  }


  handleSubmit(e) {
    e.preventDefault();

    const name = this.refs.recipe.value;
    const ingredients = this.refs.ingredients.value;

    if(name !== ""){
      // clear user input
    this.refs.recipe.value = '';
    this.refs.ingredients.value = '';
    const recipe = { name, ingredients }
    
    this.props.addRecipe(recipe)
    }
  }

  render() {

    return (
      <div>
        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Add Recipe</button>

        {/*modal*/}
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            {/*Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Add a Recipe</h4>
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
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmit} >Add Recipe</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Buttons
