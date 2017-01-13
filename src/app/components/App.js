import React from 'react'
import RecipeContainer from '../containers/RecipeContainer'
import ModalContainer from '../containers/ModalContainer'


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h3>Recipe Box</h3>
          <RecipeContainer />
          <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#addModal">Add Recipe</button>
          <ModalContainer name="Add" modalName="addModal"/>
        </div>
      </div>
    )
  }
}

export default App
